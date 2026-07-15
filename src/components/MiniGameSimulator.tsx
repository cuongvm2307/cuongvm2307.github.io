import React, { useState, useEffect, useRef } from 'react';
import { 
  Sword, ShieldAlert, Sparkles, Droplet, Coins, Play, 
  RotateCcw, Trophy, CheckCircle, Cpu, Code, FileText,
  Flame, Heart, Eye
} from 'lucide-react';
import { playSound } from '../utils/audio';

interface MiniGameSimulatorProps {
  demoType: 'combat' | 'hacking' | 'farming';
  gameTitle: string;
}

export default function MiniGameSimulator({ demoType, gameTitle }: MiniGameSimulatorProps) {
  // Common states
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Load high score
  useEffect(() => {
    const saved = localStorage.getItem(`hanhi_highscore_${demoType}`);
    if (saved) {
      setHighScore(parseInt(saved, 10));
    }
  }, [demoType]);

  const saveScore = (newScore: number) => {
    if (newScore > highScore) {
      setHighScore(newScore);
      localStorage.setItem(`hanhi_highscore_${demoType}`, newScore.toString());
    }
  };

  // ==========================================
  // GAME 1: COMBAT (Thần Kiếm)
  // ==========================================
  const [enemyPos, setEnemyPos] = useState(100); // 0 to 100% of runway
  const [lives, setLives] = useState(3);
  const [combo, setCombo] = useState(0);
  const [hitFeedback, setHitFeedback] = useState<'PERFECT' | 'GREAT' | 'MISS' | null>(null);
  const gameIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const startCombatGame = () => {
    setIsPlaying(true);
    setGameOver(false);
    setScore(0);
    setCombo(0);
    setLives(3);
    setEnemyPos(100);
    setHitFeedback(null);
  };

  useEffect(() => {
    if (demoType === 'combat' && isPlaying && !gameOver) {
      // Game loop for moving enemies
      gameIntervalRef.current = setInterval(() => {
        setEnemyPos((prev) => {
          if (prev <= 0) {
            // Reached swordsman without being hit -> MISS
            playSound.fail();
            setLives((l) => {
              if (l <= 1) {
                setGameOver(true);
                setIsPlaying(false);
                if (gameIntervalRef.current) clearInterval(gameIntervalRef.current);
                return 0;
              }
              return l - 1;
            });
            setCombo(0);
            setHitFeedback('MISS');
            setTimeout(() => setHitFeedback(null), 800);
            return 100; // Reset enemy
          }
          // Speed depends on score slightly
          const speed = 1.2 + (score / 1500);
          return prev - speed;
        });
      }, 16);
    }

    return () => {
      if (gameIntervalRef.current) clearInterval(gameIntervalRef.current);
    };
  }, [demoType, isPlaying, gameOver, score]);

  const handleSlash = () => {
    if (!isPlaying || gameOver) return;

    playSound.slash();

    // Optimal strike zone is between 8% and 22%
    const pos = enemyPos;
    if (pos >= 10 && pos <= 20) {
      // PERFECT
      playSound.hit();
      const points = 100 + combo * 10;
      setScore((s) => {
        const next = s + points;
        saveScore(next);
        return next;
      });
      setCombo((c) => c + 1);
      setHitFeedback('PERFECT');
      setEnemyPos(100); // Reset enemy
    } else if (pos >= 5 && pos <= 28) {
      // GREAT
      playSound.hit();
      const points = 50 + combo * 5;
      setScore((s) => {
        const next = s + points;
        saveScore(next);
        return next;
      });
      setCombo((c) => c + 1);
      setHitFeedback('GREAT');
      setEnemyPos(100); // Reset enemy
    } else {
      // MISS
      playSound.fail();
      setLives((l) => {
        if (l <= 1) {
          setGameOver(true);
          setIsPlaying(false);
          return 0;
        }
        return l - 1;
      });
      setCombo(0);
      setHitFeedback('MISS');
    }

    setTimeout(() => {
      setHitFeedback(null);
    }, 600);
  };

  // Keyboard support for spacebar in combat game
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && demoType === 'combat' && isPlaying && !gameOver) {
        e.preventDefault();
        handleSlash();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, gameOver, enemyPos, combo]);


  // ==========================================
  // GAME 2: HACKING (Neon Nexus)
  // ==========================================
  const [hackingSequence, setHackingSequence] = useState<string[]>([]);
  const [hackingProgress, setHackingProgress] = useState<number>(0);
  const [matrixNodes, setMatrixNodes] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(25);
  const [decryptedData, setDecryptedData] = useState<string | null>(null);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const HEX_POOL = ['5A', 'FF', '8C', 'D2', 'C0', 'E4', '3B', 'A1', '0F', '7E', 'B9', 'D8', '22', 'F1', 'AE', '4C'];

  const startHackingGame = () => {
    setIsPlaying(true);
    setGameOver(false);
    setScore(0);
    setHackingProgress(0);
    setTimeLeft(25);
    setDecryptedData(null);

    // Generate target sequence of 4 unique keys
    const seq: string[] = [];
    while (seq.length < 4) {
      const code = HEX_POOL[Math.floor(Math.random() * HEX_POOL.length)];
      if (!seq.includes(code)) seq.push(code);
    }
    setHackingSequence(seq);

    // Generate grid pool
    const grid: string[] = [...seq];
    while (grid.length < 16) {
      const rCode = HEX_POOL[Math.floor(Math.random() * HEX_POOL.length)];
      if (!grid.includes(rCode)) grid.push(rCode);
    }
    // Shuffle
    grid.sort(() => Math.random() - 0.5);
    setMatrixNodes(grid);
  };

  useEffect(() => {
    if (demoType === 'hacking' && isPlaying && !gameOver) {
      timerIntervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            playSound.fail();
            setGameOver(true);
            setIsPlaying(false);
            if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [isPlaying, gameOver, demoType]);

  const handleNodeClick = (code: string) => {
    if (!isPlaying || gameOver) return;

    const currentTarget = hackingSequence[hackingProgress];
    if (code === currentTarget) {
      // Correct!
      playSound.hackBlip(true);
      const nextProgress = hackingProgress + 1;
      setHackingProgress(nextProgress);

      if (nextProgress === hackingSequence.length) {
        // Success hack!
        const scoreGain = timeLeft * 100 + 500;
        setScore(scoreGain);
        saveScore(scoreGain);
        setIsPlaying(false);
        setDecryptedData(
          `[MÃ NGUỒN CỦA NEXUS ĐÃ ĐƯỢC GIẢI MÃ THÀNH CÔNG]
Dữ liệu rò rỉ từ Tập đoàn V-Corp: "Dự án siêu AI Neural Nexus đang thâm nhập vào thiết bị thực tế ảo của người dân Neo-Saigon. Đội Ghost Hacker của HanHi Games đã định vị chính xác lõi dữ liệu trung tâm..."`
        );
        if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      }
    } else {
      // Incorrect code
      playSound.hackBlip(false);
      setTimeLeft((t) => Math.max(0, t - 5)); // Penalty 5 seconds
      setHitFeedback('MISS');
      setTimeout(() => setHitFeedback(null), 500);
    }
  };


  // ==========================================
  // GAME 3: FARMING (Thung Lũng Diệu Kỳ)
  // ==========================================
  interface Plot {
    id: number;
    status: 'empty' | 'planted' | 'watered' | 'ripe';
    plantType: 'flora' | 'star' | 'lunar' | null;
    growth: number; // 0 to 100
  }

  const [plots, setPlots] = useState<Plot[]>([
    { id: 1, status: 'empty', plantType: null, growth: 0 },
    { id: 2, status: 'empty', plantType: null, growth: 0 },
    { id: 3, status: 'empty', plantType: null, growth: 0 },
    { id: 4, status: 'empty', plantType: null, growth: 0 }
  ]);
  const [selectedSeed, setSelectedSeed] = useState<'flora' | 'star' | 'lunar'>('flora');
  const [crystals, setCrystals] = useState(15); // Currency in-game
  const [farmLogs, setFarmLogs] = useState<string[]>(['Chào mừng đến với Thung Lũng Diệu Kỳ!']);

  const SEED_CONFIG = {
    flora: { name: 'Hoa Thần Kỳ 🌸', cost: 5, value: 12, growthTime: 3 },
    star: { name: 'Hạt Sao Trời ⭐', cost: 10, value: 25, growthTime: 6 },
    lunar: { name: 'Thảo Dược Trăng Tròn 🌙', cost: 20, value: 60, growthTime: 10 }
  };

  const startFarmingGame = () => {
    setIsPlaying(true);
    setGameOver(false);
    setScore(0);
    setCrystals(15);
    setPlots([
      { id: 1, status: 'empty', plantType: null, growth: 0 },
      { id: 2, status: 'empty', plantType: null, growth: 0 },
      { id: 3, status: 'empty', plantType: null, growth: 0 },
      { id: 4, status: 'empty', plantType: null, growth: 0 }
    ]);
    setFarmLogs(['Bắt đầu gieo trồng và thu hoạch pha lê ma thuật!']);
  };

  // Plant growth clock
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (demoType === 'farming' && isPlaying) {
      interval = setInterval(() => {
        setPlots((prevPlots) =>
          prevPlots.map((plot) => {
            if (plot.status === 'watered' && plot.growth < 100) {
              const seed = plot.plantType ? SEED_CONFIG[plot.plantType] : null;
              if (!seed) return plot;
              const rate = 100 / (seed.growthTime * 4); // Growth tick
              const nextGrowth = Math.min(100, plot.growth + rate);
              return {
                ...plot,
                growth: nextGrowth,
                status: nextGrowth >= 100 ? 'ripe' : 'watered'
              };
            }
            return plot;
          })
        );
      }, 250);
    }
    return () => clearInterval(interval);
  }, [isPlaying, demoType]);

  const addLog = (msg: string) => {
    setFarmLogs((l) => [msg, ...l.slice(0, 3)]);
  };

  const handlePlotAction = (id: number) => {
    if (!isPlaying) return;

    setPlots((prev) =>
      prev.map((plot) => {
        if (plot.id !== id) return plot;

        // Action based on current status
        if (plot.status === 'empty') {
          // Plant seed
          const seed = SEED_CONFIG[selectedSeed];
          if (crystals < seed.cost) {
            playSound.fail();
            addLog(`Không đủ pha lê để mua hạt giống ${seed.name}!`);
            return plot;
          }
          playSound.twinkle();
          setCrystals((c) => c - seed.cost);
          addLog(`Đã gieo ${seed.name}. Cần tưới nước!`);
          return {
            ...plot,
            status: 'planted',
            plantType: selectedSeed,
            growth: 0
          };
        } else if (plot.status === 'planted') {
          // Water
          playSound.twinkle();
          addLog(`Đã tưới nước! Cây đang lớn lên...`);
          return {
            ...plot,
            status: 'watered'
          };
        } else if (plot.status === 'ripe') {
          // Harvest
          const seed = plot.plantType ? SEED_CONFIG[plot.plantType] : null;
          if (!seed) return plot;

          playSound.hit(); // sweet twinkle-chime sound
          const reward = seed.value;
          setCrystals((c) => c + reward);
          setScore((s) => {
            const next = s + reward;
            saveScore(next);
            return next;
          });
          addLog(`Đã thu hoạch ${seed.name}! Nhận +${reward} 💎`);
          return {
            ...plot,
            status: 'empty',
            plantType: null,
            growth: 0
          };
        }

        return plot;
      })
    );
  };


  return (
    <div className="bg-slate-900 border border-slate-700/60 rounded-2xl overflow-hidden shadow-2xl p-6 max-w-lg mx-auto" id="mini-game-container">
      {/* Game Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
        <div>
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">MINI-GAME TRẢI NGHIỆM</span>
          <h4 className="text-lg font-bold text-white tracking-tight">{gameTitle}</h4>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700/50 flex items-center gap-1.5">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono font-bold text-amber-400">{highScore}</span>
          </div>
        </div>
      </div>

      {/* START SCREEN */}
      {!isPlaying && !gameOver && !decryptedData && (
        <div className="py-12 px-4 flex flex-col items-center text-center">
          {demoType === 'combat' && <Sword className="w-16 h-16 text-red-500 animate-pulse mb-4" />}
          {demoType === 'hacking' && <Cpu className="w-16 h-16 text-emerald-500 animate-pulse mb-4" />}
          {demoType === 'farming' && <Sparkles className="w-16 h-16 text-pink-400 animate-pulse mb-4" />}

          <h5 className="text-white font-semibold text-base mb-2">Sẵn sàng trải nghiệm một màn chơi thử?</h5>
          <p className="text-slate-400 text-xs max-w-sm mb-6">
            {demoType === 'combat' && 'Vung kiếm chuẩn xác khi yêu ma đi vào Hồng Tâm. Bấm SPACE hoặc click nút Tấn Công để vung kiếm chém yêu ma!'}
            {demoType === 'hacking' && 'Nhấp chọn dãy mã Hex chính xác trong ma trận để giải mã hệ sinh thái AI Nexus trước khi hết thời gian!'}
            {demoType === 'farming' && 'Trồng trọt hoa quả thần diệu, tưới nước để giúp cây lớn lên, thu hoạch tinh thể pha lê lấp lánh.'}
          </p>

          <button
            onClick={() => {
              if (demoType === 'combat') startCombatGame();
              if (demoType === 'hacking') startHackingGame();
              if (demoType === 'farming') startFarmingGame();
            }}
            className={`flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-xl shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer ${
              demoType === 'combat' ? 'bg-red-600 text-white shadow-red-900/30' :
              demoType === 'hacking' ? 'bg-emerald-600 text-white shadow-emerald-900/30' :
              'bg-gradient-to-r from-pink-500 to-amber-500 text-white shadow-pink-900/30'
            }`}
            id="start-demo-btn"
          >
            <Play className="w-4 h-4 fill-current" /> Chơi Thử Bản Demo
          </button>
        </div>
      )}

      {/* ================================================== */}
      {/* SCREEN: COMBAT RUNNING */}
      {/* ================================================== */}
      {demoType === 'combat' && isPlaying && !gameOver && (
        <div className="flex flex-col gap-6 py-2">
          {/* Stats Bar */}
          <div className="flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800">
            <div className="flex items-center gap-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <Heart
                  key={i}
                  className={`w-5 h-5 ${i < lives ? 'text-red-500 fill-red-500 animate-pulse' : 'text-slate-800'}`}
                />
              ))}
            </div>
            <div className="text-right">
              <div className="text-[10px] text-slate-500 font-mono">ĐIỂM SỐ</div>
              <div className="text-lg font-mono font-bold text-white">{score}</div>
            </div>
            {combo > 1 && (
              <div className="bg-red-500/20 text-red-400 text-xs font-bold px-2.5 py-1 rounded-full border border-red-500/30 animate-bounce">
                Combo x{combo}
              </div>
            )}
          </div>

          {/* Game Arena / Highway */}
          <div className="relative bg-slate-950 h-32 rounded-xl border border-slate-800/80 overflow-hidden flex items-center">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px)] bg-[size:20px_100%] opacity-10"></div>

            {/* Hit Zone/Target Center */}
            <div className="absolute left-[15%] w-12 h-12 -ml-6 rounded-full border-2 border-red-500/80 bg-red-950/20 flex items-center justify-center animate-pulse z-10">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
            </div>

            {/* Guide line */}
            <div className="absolute left-[15%] right-0 h-0.5 bg-slate-800"></div>

            {/* Swordsman Hero on the Left */}
            <div className="absolute left-[5%] text-2xl z-20 select-none">
              🧙‍♂️
            </div>

            {/* Enemy moving */}
            <div 
              className="absolute text-2xl select-none z-20 drop-shadow-[0_0_8px_rgba(239,68,68,0.7)]"
              style={{ left: `${enemyPos}%`, transform: 'translateX(-50%)' }}
            >
              👿
            </div>

            {/* Precision strike guide text */}
            <div className="absolute bottom-1 left-[15%] -translate-x-1/2 text-[9px] font-mono text-red-400 tracking-wide">
              HỒNG TÂM
            </div>

            {/* Floating text feedback */}
            {hitFeedback && (
              <div 
                className={`absolute left-[15%] top-4 -translate-x-1/2 font-bold text-sm tracking-widest animate-ping ${
                  hitFeedback === 'PERFECT' ? 'text-amber-400' :
                  hitFeedback === 'GREAT' ? 'text-green-400' : 'text-red-500'
                }`}
              >
                {hitFeedback}
              </div>
            )}
          </div>

          {/* Action Trigger Button */}
          <button
            onClick={handleSlash}
            className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-red-900/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-base cursor-pointer"
            id="slash-attack-btn"
          >
            <Sword className="w-5 h-5" /> VUNG THẦN KIẾM (SPACE)
          </button>
        </div>
      )}

      {/* ================================================== */}
      {/* SCREEN: HACKING RUNNING */}
      {/* ================================================== */}
      {demoType === 'hacking' && isPlaying && !gameOver && (
        <div className="flex flex-col gap-5 py-1">
          {/* Stats & Countdown */}
          <div className="flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800">
            <div>
              <div className="text-[10px] font-mono text-slate-500">THỜI GIAN CÒN LẠI</div>
              <div className={`text-xl font-mono font-bold ${timeLeft < 10 ? 'text-rose-500 animate-pulse' : 'text-emerald-400'}`}>
                {timeLeft} giây
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-mono text-slate-500">TIẾN TRÌNH GIẢI MÃ</div>
              <div className="text-sm font-mono font-bold text-white">
                {hackingProgress} / {hackingSequence.length} LỚP BAO VỆ
              </div>
            </div>
          </div>

          {/* Target Pattern Panel */}
          <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-2">KHÓA AN NINH CẦN PHÁ (ẤN THEO THỨ TỰ):</span>
            <div className="flex justify-center gap-3">
              {hackingSequence.map((code, index) => {
                const isCleared = index < hackingProgress;
                const isCurrent = index === hackingProgress;
                return (
                  <div
                    key={index}
                    className={`px-4 py-2 rounded-lg font-mono text-sm font-bold border transition-all ${
                      isCleared 
                        ? 'bg-emerald-950/40 border-emerald-500 text-emerald-400 line-through opacity-55' 
                        : isCurrent 
                        ? 'bg-slate-800 border-indigo-500 text-indigo-400 animate-pulse scale-105' 
                        : 'bg-slate-900 border-slate-700 text-slate-400'
                    }`}
                  >
                    {code}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Matrix Grid Decryptor */}
          <div className="grid grid-cols-4 gap-2.5 bg-slate-950 p-4 rounded-xl border border-emerald-950/50">
            {matrixNodes.map((code, index) => {
              const isTargetIndex = hackingSequence.indexOf(code);
              const isAlreadyCleared = isTargetIndex !== -1 && isTargetIndex < hackingProgress;

              return (
                <button
                  key={index}
                  onClick={() => handleNodeClick(code)}
                  disabled={isAlreadyCleared}
                  className={`py-3 rounded-lg font-mono text-xs font-bold transition-all active:scale-95 cursor-pointer ${
                    isAlreadyCleared
                      ? 'bg-emerald-950/10 border border-emerald-500/20 text-emerald-500/30 cursor-not-allowed'
                      : 'bg-slate-900 border border-slate-800 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 hover:shadow-[0_0_10px_rgba(16,185,129,0.15)]'
                  }`}
                >
                  {code}
                </button>
              );
            })}
          </div>

          {hitFeedback === 'MISS' && (
            <div className="text-center text-rose-500 font-mono text-[11px] animate-pulse">
              ⚠️ CẢNH BÁO AN NINH: SAI MẬT MÃ (-5 GIÂY)!
            </div>
          )}
        </div>
      )}

      {/* ================================================== */}
      {/* SCREEN: FARMING RUNNING */}
      {/* ================================================== */}
      {demoType === 'farming' && isPlaying && !gameOver && (
        <div className="flex flex-col gap-4 py-1">
          {/* Stats Bar */}
          <div className="flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800">
            <div className="flex items-center gap-1.5">
              <Coins className="w-5 h-5 text-amber-400" />
              <span className="text-base font-mono font-bold text-amber-400">{crystals} 💎</span>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-mono text-slate-500 font-medium">PHA LÊ THU HOẠCH (ĐIỂM)</div>
              <div className="text-base font-mono font-bold text-white">{score}</div>
            </div>
          </div>

          {/* Seed selector */}
          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 flex items-center justify-between gap-2">
            <span className="text-xs text-slate-400 font-medium whitespace-nowrap">Chọn Hạt Giống:</span>
            <div className="flex gap-1.5 overflow-x-auto">
              {(Object.keys(SEED_CONFIG) as Array<'flora' | 'star' | 'lunar'>).map((key) => {
                const active = selectedSeed === key;
                const cfg = SEED_CONFIG[key];
                return (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedSeed(key);
                      playSound.twinkle();
                    }}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border flex flex-col items-center gap-0.5 transition-all cursor-pointer ${
                      active
                        ? 'bg-pink-950/40 border-pink-500 text-pink-400 scale-105'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <span className="text-xs font-semibold">{cfg.name.split(' ')[0]}</span>
                    <span className="text-[9px] opacity-80">{cfg.cost} 💎</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Farm Grid */}
          <div className="grid grid-cols-2 gap-3.5 bg-slate-950 p-4 rounded-xl border border-slate-800">
            {plots.map((plot) => {
              const plant = plot.plantType ? SEED_CONFIG[plot.plantType] : null;

              return (
                <button
                  key={plot.id}
                  onClick={() => handlePlotAction(plot.id)}
                  className={`aspect-video rounded-xl border flex flex-col items-center justify-center relative overflow-hidden transition-all active:scale-[0.97] cursor-pointer group ${
                    plot.status === 'empty'
                      ? 'bg-slate-900 border-dashed border-slate-800 hover:border-pink-500/30 text-slate-500 hover:text-slate-300'
                      : plot.status === 'planted'
                      ? 'bg-amber-950/20 border-amber-600/50 text-amber-500'
                      : plot.status === 'watered'
                      ? 'bg-blue-950/20 border-blue-500/50 text-blue-400'
                      : 'bg-emerald-950/30 border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                  }`}
                >
                  {plot.status === 'empty' && (
                    <div className="text-center">
                      <div className="text-lg opacity-40 group-hover:opacity-80 transition-opacity mb-0.5">🟫</div>
                      <span className="text-[10px] tracking-wide block uppercase font-mono font-semibold opacity-60">ĐẤT TRỐNG</span>
                    </div>
                  )}

                  {plot.status === 'planted' && (
                    <div className="text-center">
                      <div className="text-base animate-bounce mb-0.5">🌱</div>
                      <span className="text-[9px] bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded text-amber-500 font-mono flex items-center justify-center gap-1">
                        <Droplet className="w-2.5 h-2.5 animate-pulse" /> CẦN TƯỚI
                      </span>
                    </div>
                  )}

                  {plot.status === 'watered' && (
                    <div className="text-center w-full px-4">
                      <div className="text-lg animate-pulse mb-0.5">🌿</div>
                      <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                        <div 
                          className="bg-blue-500 h-full transition-all duration-300"
                          style={{ width: `${plot.growth}%` }}
                        ></div>
                      </div>
                      <span className="text-[9px] text-blue-300 font-mono mt-1 block">
                        ĐANG LỚN ({Math.round(plot.growth)}%)
                      </span>
                    </div>
                  )}

                  {plot.status === 'ripe' && (
                    <div className="text-center animate-bounce">
                      <div className="text-2xl drop-shadow-[0_0_8px_rgba(244,63,94,0.6)] mb-0.5">
                        {plot.plantType === 'flora' ? '🌸' : plot.plantType === 'star' ? '⭐' : '🌙'}
                      </div>
                      <span className="text-[9px] bg-emerald-500 text-slate-950 px-1.5 py-0.5 rounded font-bold uppercase tracking-widest">
                        THU HOẠCH!
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Mini Log */}
          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 font-mono text-[10px] text-slate-400 h-16 overflow-y-auto">
            {farmLogs.map((log, idx) => (
              <div key={idx} className={idx === 0 ? 'text-pink-400 font-semibold' : 'opacity-60'}>
                &gt; {log}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================================================== */}
      {/* SCREEN: GAME OVER / SUCCESS */}
      {/* ================================================== */}
      {(gameOver || decryptedData) && (
        <div className="py-8 text-center flex flex-col items-center">
          {decryptedData ? (
            <CheckCircle className="w-14 h-14 text-emerald-500 animate-bounce mb-3" />
          ) : (
            <ShieldAlert className="w-14 h-14 text-red-500 animate-pulse mb-3" />
          )}

          <h5 className="text-white font-bold text-base mb-1">
            {decryptedData ? 'XÂM NHẬP THÀNH CÔNG!' : 'TRÒ CHƠI KẾT THÚC'}
          </h5>

          <p className="text-slate-400 text-xs mb-4">
            {decryptedData ? 'Bạn đã thu thập dữ liệu bí mật xuất sắc!' : 'Hãy tập luyện để đạt mốc điểm số cao hơn.'}
          </p>

          <div className="bg-slate-950 px-5 py-3 rounded-xl border border-slate-800 mb-6 font-mono">
            <span className="text-[10px] text-slate-500 block uppercase">Điểm Số Đạt Được</span>
            <span className="text-2xl font-bold text-indigo-400">{score}</span>
          </div>

          {decryptedData && (
            <div className="bg-slate-950/80 p-4 border border-emerald-900/30 rounded-xl max-w-sm text-left font-mono text-[11px] text-emerald-400 leading-relaxed mb-6 whitespace-pre-line">
              {decryptedData}
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => {
                if (demoType === 'combat') startCombatGame();
                if (demoType === 'hacking') startHackingGame();
                if (demoType === 'farming') startFarmingGame();
              }}
              className={`flex items-center gap-1.5 px-5 py-2.5 font-bold text-xs rounded-lg transition-all active:scale-95 cursor-pointer ${
                demoType === 'combat' ? 'bg-red-600 hover:bg-red-500 text-white' :
                demoType === 'hacking' ? 'bg-emerald-600 hover:bg-emerald-500 text-white' :
                'bg-pink-600 hover:bg-pink-500 text-white'
              }`}
              id="replay-btn"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Chơi Lại
            </button>
            <button
              onClick={() => {
                setIsPlaying(false);
                setGameOver(false);
                setDecryptedData(null);
                setScore(0);
              }}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold px-5 py-2.5 text-xs rounded-lg active:scale-95 transition-all cursor-pointer"
              id="back-menu-btn"
            >
              Về Menu Demo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
