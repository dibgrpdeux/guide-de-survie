<!DOCTYPE html>
<html lang="ar" dir="rtl" data-theme="light">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title data-i18n="page_title">صحتي ورياضتي - ENSTP</title>

  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

  <style>
    :root {
      --primary: #fbbf24; --primary-hover: #f59e0b;
      --orange: #f97316; --orange-dark: #ea580c;
      --bg-color: #ffffff; --text-main: #0f172a; --text-muted: #64748b;
      --card-bg: #ffffff; --nav-bg: rgba(255,255,255,0.95);
      --border-color: #e2e8f0;
      --shadow-sm: 0 2px 8px rgba(0,0,0,0.06);
      --shadow-md: 0 10px 30px rgba(0,0,0,0.1);
      --health: #10b981;
    }
    [data-theme="dark"] {
      --bg-color: #0a1128; --text-main: #f8fafc; --text-muted: #94a3b8;
      --card-bg: #0f1e41; --nav-bg: rgba(10,17,40,0.95);
      --border-color: #1e3a8a;
      --shadow-sm: 0 2px 8px rgba(0,0,0,0.4);
      --shadow-md: 0 10px 30px rgba(0,0,0,0.5);
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Cairo', sans-serif; background-color: var(--bg-color);
      color: var(--text-main); transition: background-color .4s, color .4s;
      margin: 0; overflow-x: hidden; -webkit-font-smoothing: antialiased;
      min-height: 100vh; padding-top: 90px;
    }
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #f97316, #ea580c); border-radius: 10px; }

    .animated-bg { position: fixed; inset: 0; z-index: -3; overflow: hidden; background: var(--bg-color); transition: background .6s; }
    .blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: .35; animation: blobFloat 25s ease-in-out infinite; }
    .blob-1 { width: 500px; height: 500px; background: #f97316; top: -10%; left: -10%; }
    .blob-2 { width: 450px; height: 450px; background: #fbbf24; bottom: -10%; right: -10%; animation-delay: -8s; }
    .blob-3 { width: 350px; height: 350px; background: #ea580c; top: 50%; left: 40%; animation-delay: -15s; opacity: .25; }
    [data-theme="dark"] .blob-1 { background:#f97316; opacity:.2 }
    [data-theme="dark"] .blob-2 { background:#3b82f6; opacity:.15 }
    [data-theme="dark"] .blob-3 { background:#1e3a8a; opacity:.3 }
    @keyframes blobFloat {
      0%,100% { transform: translate(0,0) scale(1); }
      33% { transform: translate(60px,-40px) scale(1.1); }
      66% { transform: translate(-40px,60px) scale(.95); }
    }
    .dot { position: absolute; border-radius: 50%; background: #f97316; opacity: .15; animation: dotFloat 15s linear infinite; }
    [data-theme="dark"] .dot { background: #60a5fa; opacity: .25; }
    .dot-1 { width: 12px; height: 12px; top: 15%; left: 10%; }
    .dot-2 { width: 8px; height: 8px; top: 60%; left: 85%; animation-delay: -3s; }
    .dot-3 { width: 16px; height: 16px; top: 80%; left: 20%; animation-delay: -6s; }
    .dot-4 { width: 10px; height: 10px; top: 30%; left: 70%; animation-delay: -9s; }
    .dot-5 { width: 14px; height: 14px; top: 45%; left: 50%; animation-delay: -12s; }
    @keyframes dotFloat {
      0% { transform: translateY(0) translateX(0); }
      50% { transform: translateY(-30px) translateX(20px); }
      100% { transform: translateY(0) translateX(0); }
    }

    .top-navbar {
      position: fixed; top: 12px; left: 50%; transform: translateX(-50%);
      width: 96%; max-width: 1100px; background: var(--nav-bg);
      backdrop-filter: blur(20px) saturate(180%);
      border: 1.5px solid var(--border-color); border-radius: 22px;
      padding: 10px 14px; display: flex; justify-content: space-between; align-items: center;
      gap: 12px; z-index: 1000; box-shadow: var(--shadow-md);
    }
    .nav-brand { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
    .nav-title { font-size: 1rem; font-weight: 900; color: var(--text-main); line-height: 1.1; }
    .nav-title span {
      background: linear-gradient(90deg,#f97316,#fbbf24,#f97316);
      background-size: 200% auto; -webkit-background-clip: text; background-clip: text;
      -webkit-text-fill-color: transparent; animation: shimmer 3s linear infinite;
    }
    @keyframes shimmer { to { background-position: 200% center; } }
    .nav-subtitle { font-size: .65rem; color: var(--text-muted); font-weight: 600; margin-top: 1px; }
    .nav-icon {
      width: 42px; height: 42px; border-radius: 12px;
      background: linear-gradient(135deg,#f97316,#ea580c); color: #fff;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.2rem; box-shadow: 0 6px 18px rgba(249,115,22,.35); flex-shrink: 0;
    }
    .nav-menu-btn {
      width: 42px; height: 42px; border-radius: 14px;
      border: 1.5px solid var(--border-color); background: var(--card-bg);
      color: var(--text-main); display: flex; align-items: center; justify-content: center;
      cursor: pointer; transition: all .25s; font-size: 1rem; flex-shrink: 0;
    }
    .nav-menu-btn:hover { background: var(--orange); color: #fff; border-color: var(--orange); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(249,115,22,.35); }
    .nav-menu-btn.active { background: var(--orange); color: #fff; border-color: var(--orange); }

    .nav-dropdown {
      position: fixed; top: 72px; left: 50%; transform: translateX(-50%) translateY(-10px);
      width: 290px; max-width: 92%; background: var(--nav-bg);
      backdrop-filter: blur(20px); border: 1px solid var(--border-color);
      border-radius: 20px; padding: 8px; box-shadow: var(--shadow-md);
      z-index: 1001; opacity: 0; pointer-events: none;
      transition: all .25s cubic-bezier(.34,1.56,.64,1);
    }
    .nav-dropdown.open { opacity: 1; pointer-events: auto; transform: translateX(-50%) translateY(0); }
    .dropdown-section { padding: 10px 8px; border-bottom: 1px solid var(--border-color); }
    .dropdown-section:last-child { border-bottom: none; }
    .dropdown-label { font-size: .65rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: .5px; margin-bottom: 8px; padding: 0 4px; }
    .dropdown-row { display: flex; gap: 5px; flex-wrap: wrap; }
    .dropdown-btn {
      padding: 8px 12px; border-radius: 10px; border: 1px solid var(--border-color);
      background: var(--card-bg); color: var(--text-main);
      font-family: inherit; font-size: .75rem; font-weight: 700;
      cursor: pointer; transition: all .2s; display: inline-flex; align-items: center;
      gap: 6px; flex: 1; justify-content: center; min-width: fit-content; text-decoration: none;
    }
    .dropdown-btn:hover { background: var(--primary); color: #000; border-color: var(--primary); transform: translateY(-1px); }
    .dropdown-btn.active { background: var(--orange); color: #fff; border-color: var(--orange); }

    .page-hero { max-width: 1100px; margin: 0 auto 20px; padding: 0 20px; text-align: center; }
    .page-hero h1 { font-size: clamp(1.6rem, 4vw, 2.4rem); font-weight: 900; margin: 0 0 8px; line-height: 1.2; }
    .page-hero h1 span {
      background: linear-gradient(90deg,#fbbf24,#f97316,#fbbf24);
      background-size: 200% auto; -webkit-background-clip: text; background-clip: text;
      -webkit-text-fill-color: transparent; animation: shimmer 3s linear infinite;
    }
    .page-hero p { color: var(--text-muted); font-size: .95rem; font-weight: 600; margin: 0; }

    .main-tabs {
      display: flex; gap: 12px; justify-content: center;
      max-width: 1100px; margin: 0 auto 24px; padding: 0 20px;
    }
    .main-tab {
      flex: 1; max-width: 320px; padding: 18px 20px; border-radius: 20px;
      background: var(--card-bg); border: 2px solid var(--border-color);
      font-family: inherit; font-weight: 900; font-size: 1.1rem;
      color: var(--text-main); cursor: pointer;
      display: flex; align-items: center; justify-content: center; gap: 12px;
      transition: all .3s cubic-bezier(.34,1.56,.64,1); box-shadow: var(--shadow-sm);
    }
    .main-tab i { font-size: 1.5rem; }
    .main-tab.sport i { color: var(--orange); }
    .main-tab.health i { color: var(--health); }
    .main-tab:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }
    .main-tab.sport.active {
      background: linear-gradient(135deg,#f97316,#ea580c); color: #fff; border-color: transparent;
      box-shadow: 0 15px 40px rgba(249,115,22,.4);
    }
    .main-tab.sport.active i { color: #fff; }
    .main-tab.health.active {
      background: linear-gradient(135deg,#10b981,#059669); color: #fff; border-color: transparent;
      box-shadow: 0 15px 40px rgba(16,185,129,.4);
    }
    .main-tab.health.active i { color: #fff; }

    .content-wrap { max-width: 1100px; margin: 0 auto; padding: 0 20px 60px; }

    .filters-bar { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-bottom: 24px; }
    .filter-chip {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 11px 20px; border-radius: 16px;
      background: var(--card-bg); border: 1.5px solid var(--border-color);
      color: var(--text-main); font-family: inherit; font-weight: 800; font-size: .88rem;
      cursor: pointer; transition: all .3s cubic-bezier(.34,1.56,.64,1);
      box-shadow: var(--shadow-sm);
    }
    .filter-chip i { font-size: 1rem; color: var(--orange); transition: all .2s; }
    .filter-chip:hover { transform: translateY(-3px); border-color: var(--orange); box-shadow: 0 10px 25px rgba(249,115,22,.2); }
    .filter-chip:hover i { transform: scale(1.15) rotate(-8deg); }
    .filter-chip.active {
      background: linear-gradient(135deg,#f97316,#ea580c); color: #fff; border-color: transparent;
      box-shadow: 0 12px 30px rgba(249,115,22,.4);
    }
    .filter-chip.active i { color: #fff; }
    .health-mode .filter-chip i { color: var(--health); }
    .health-mode .filter-chip:hover { border-color: var(--health); box-shadow: 0 10px 25px rgba(16,185,129,.2); }
    .health-mode .filter-chip.active {
      background: linear-gradient(135deg,#10b981,#059669);
      box-shadow: 0 12px 30px rgba(16,185,129,.4);
    }

    #itemsGrid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }

    .sport-card {
      background: var(--card-bg); border: 1.5px solid var(--border-color);
      border-radius: 20px; overflow: hidden; cursor: pointer;
      display: flex; flex-direction: column; box-shadow: var(--shadow-sm);
      transition: all .35s cubic-bezier(.34,1.56,.64,1);
    }
    .sport-card:hover { transform: translateY(-6px) scale(1.01); border-color: var(--orange); box-shadow: 0 25px 50px -12px rgba(249,115,22,.25); }
    .health-mode .sport-card:hover { border-color: var(--health); box-shadow: 0 25px 50px -12px rgba(16,185,129,.25); }

    .sport-card-cover {
      width: 100%; height: 190px; overflow: hidden;
      background: linear-gradient(135deg, #fed7aa, #fbbf24);
      position: relative;
    }
    .sport-card-cover img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s ease; }
    .sport-card:hover .sport-card-cover img { transform: scale(1.08); }
    .sport-card-cover .no-img {
      width: 100%; height: 100%;
      display: flex; align-items: center; justify-content: center;
      font-size: 4rem;
      background: linear-gradient(135deg, rgba(249,115,22,.1), rgba(251,191,36,.15));
      transition: all .3s;
    }
    .sport-card:hover .sport-card-cover .no-img { transform: scale(1.15); }

    .carousel-track { display: flex; width: 100%; height: 100%; transition: transform .7s cubic-bezier(.4,0,.2,1); }
    .carousel-track img { flex: 0 0 100%; width: 100%; height: 100%; object-fit: cover; }
    .carousel-dots {
      position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%);
      display: flex; gap: 5px; z-index: 3;
    }
    .carousel-dots span {
      width: 6px; height: 6px; border-radius: 50%;
      background: rgba(255,255,255,.5); transition: all .3s;
    }
    .carousel-dots span.active { background: #fff; width: 16px; border-radius: 3px; }

    .sport-card-cat {
      position: absolute; top: 10px; right: 10px;
      padding: 5px 12px; border-radius: 8px;
      font-size: .68rem; font-weight: 900;
      background: rgba(255,255,255,.95); color: var(--orange-dark);
      backdrop-filter: blur(10px); box-shadow: 0 4px 12px rgba(0,0,0,.15);
      display: inline-flex; align-items: center; gap: 4px; z-index: 3;
    }
    [data-theme="dark"] .sport-card-cat { background: rgba(15,30,65,.95); color: #fdba74; }
    .health-mode .sport-card-cat { color: var(--health); }
    [data-theme="dark"] .health-mode .sport-card-cat { color: #6ee7b7; }

    .sport-card-body { padding: 16px; flex: 1; display: flex; flex-direction: column; }
    .sport-card-title {
      font-size: 1.05rem; font-weight: 900; color: var(--text-main);
      line-height: 1.25; margin: 0 0 6px; transition: color .25s;
    }
    .sport-card:hover .sport-card-title { color: var(--orange); }
    .health-mode .sport-card:hover .sport-card-title { color: var(--health); }
    .sport-card-specialty { font-size: .78rem; font-weight: 800; color: var(--orange-dark); margin: 0 0 8px; }
    .health-mode .sport-card-specialty { color: var(--health); }
    .sport-card-desc {
      font-size: .82rem; color: var(--text-muted); font-weight: 600;
      line-height: 1.5; margin: 0 0 10px;
      display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
    }
    .sport-card-meta { display: flex; flex-direction: column; gap: 4px; font-size: .75rem; color: var(--text-muted); font-weight: 600; margin-bottom: 10px; }
    .sport-card-meta i { color: var(--orange); margin-inline-end: 6px; }
    .health-mode .sport-card-meta i { color: var(--health); }
    .sport-card-footer {
      margin-top: auto; padding-top: 10px;
      border-top: 1px dashed var(--border-color);
      display: flex; align-items: center; justify-content: center;
      gap: 6px; font-size: .78rem; font-weight: 800; color: var(--orange);
    }
    .health-mode .sport-card-footer { color: var(--health); }

    #itemModal {
      position: fixed; inset: 0; z-index: 2000;
      background: rgba(15,23,42,.8); backdrop-filter: blur(4px);
      display: flex; align-items: center; justify-content: center;
      padding: 16px; opacity: 0; pointer-events: none; transition: opacity .3s;
    }
    #itemModal.open { opacity: 1; pointer-events: auto; }
    .modal-card {
      background: var(--card-bg); border-radius: 24px;
      max-width: 800px; width: 100%; max-height: 92vh;
      overflow-y: auto; padding: 28px;
      box-shadow: 0 30px 80px -10px rgba(0,0,0,.5);
      position: relative; transform: scale(.95); transition: transform .3s cubic-bezier(.34,1.56,.64,1);
    }
    #itemModal.open .modal-card { transform: scale(1); }
    .modal-close {
      position: absolute; top: 16px; left: 16px;
      width: 40px; height: 40px; border-radius: 50%;
      background: rgba(249,115,22,.12); border: none; color: var(--orange); cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      font-size: 1rem; transition: all .2s; z-index: 5;
    }
    .modal-close:hover { background: var(--orange); color: #fff; transform: rotate(90deg); }
    .modal-header { padding-bottom: 16px; margin-bottom: 20px; border-bottom: 1.5px solid var(--border-color); padding-left: 50px; }
    .modal-title { font-size: 1.5rem; font-weight: 900; color: var(--text-main); margin: 0 0 6px; }
    .modal-subtitle { font-size: .85rem; color: var(--orange-dark); font-weight: 800; }
    [data-theme="dark"] .modal-subtitle { color: #fdba74; }

    .modal-section { margin-bottom: 20px; }
    .modal-section h4 { margin: 0 0 8px; font-size: .9rem; font-weight: 900; color: var(--text-main); display: flex; align-items: center; gap: 8px; }
    .modal-section h4 i { color: var(--orange); font-size: .95rem; }
    .modal-section .section-content {
      background: rgba(249,115,22,.06); border: 1px solid rgba(249,115,22,.2);
      border-radius: 12px; padding: 12px 14px; font-size: .86rem; line-height: 1.7; color: var(--text-main);
    }
    [data-theme="dark"] .modal-section .section-content { background: rgba(249,115,22,.1); }

    .gallery-scroll { display: flex; overflow-x: auto; gap: 10px; padding-bottom: 8px; }
    .gallery-scroll::-webkit-scrollbar { height: 6px; }
    .gallery-scroll::-webkit-scrollbar-thumb { background: rgba(249,115,22,.4); border-radius: 10px; }
    .gallery-item {
      flex: 0 0 auto; width: 200px; height: 140px; border-radius: 12px; overflow: hidden;
      border: 2px solid var(--border-color); background: var(--bg-color); cursor: pointer; transition: all .3s;
    }
    .gallery-item:hover { transform: scale(1.05); border-color: var(--orange); }
    .gallery-item img { width: 100%; height: 100%; object-fit: cover; }
    .video-wrap { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 14px; border: 2px solid var(--border-color); }
    .video-wrap iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; }
    .map-wrap { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 14px; border: 2px solid var(--border-color); }
    .map-wrap iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; }
    .map-btn {
      display: inline-flex; align-items: center; gap: 6px; padding: 9px 16px; border-radius: 10px;
      background: linear-gradient(135deg,#f97316,#ea580c); color: #fff; font-weight: 800;
      font-size: .82rem; text-decoration: none; margin-top: 10px; transition: all .2s;
    }
    .map-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(249,115,22,.4); }

    .reviews-box {
      background: rgba(249,115,22,.04); border-radius: 14px; padding: 14px;
      border: 1px solid rgba(249,115,22,.15); margin-top: 14px;
    }
    [data-theme="dark"] .reviews-box { background: rgba(249,115,22,.08); border-color: rgba(249,115,22,.25); }
    .health-mode .reviews-box { background: rgba(16,185,129,.04); border-color: rgba(16,185,129,.15); }
    .reviews-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
    .reviews-title { font-size: .88rem; font-weight: 900; color: var(--text-main); display: flex; align-items: center; gap: 6px; }
    .reviews-count-badge { background: var(--orange); color: #fff; padding: 2px 8px; border-radius: 10px; font-size: .68rem; font-weight: 800; }
    .health-mode .reviews-count-badge { background: var(--health); }
    .comment-form-inline { display: flex; gap: 6px; margin-top: 10px; flex-direction: column; }
    .comment-form-inline .input-row { display: flex; gap: 6px; }
    .comment-form-inline input {
      flex: 1; padding: 8px 12px; border-radius: 10px;
      border: 1.5px solid var(--border-color); background: var(--bg-color);
      color: var(--text-main); font-family: inherit; font-size: .8rem; outline: none;
    }
    .comment-form-inline input:focus { border-color: var(--orange); }
    .health-mode .comment-form-inline input:focus { border-color: var(--health); }
    .comment-form-inline button {
      padding: 8px 14px; border-radius: 10px; border: none;
      background: var(--orange); color: #fff; font-weight: 800; cursor: pointer;
      font-family: inherit; font-size: .78rem; transition: all .2s;
    }
    .health-mode .comment-form-inline button { background: var(--health); }
    .comment-form-inline button:hover { transform: scale(1.05); }
    .comments-list-inline { display: flex; flex-direction: column; gap: 5px; margin-top: 8px; max-height: 160px; overflow-y: auto; }
    .comment-item {
      background: var(--bg-color); padding: 8px 11px; border-radius: 9px;
      border: 1px solid var(--border-color); font-size: .8rem; color: var(--text-main);
    }
    .comment-item strong { color: var(--orange-dark); }
    .health-mode .comment-item strong { color: var(--health); }
    [data-theme="dark"] .comment-item strong { color: #fdba74; }
    [data-theme="dark"] .health-mode .comment-item strong { color: #6ee7b7; }
    .no-comments { text-align: center; color: var(--text-muted); font-size: .78rem; margin: 4px 0 0; }

    .site-footer { background: var(--card-bg); border-top: 1.5px solid var(--border-color); padding: 25px 20px; margin-top: 40px; text-align: center; }
    .footer-copy { font-size: .78rem; color: var(--text-muted); font-weight: 600; }

    #chatWindow {
      position: fixed; bottom: 110px; right: 20px; z-index: 1500;
      width: 340px; max-height: 480px; background: var(--card-bg);
      border-radius: 18px; box-shadow: 0 20px 50px rgba(0,0,0,.25);
      border: 1.5px solid var(--border-color);
      display: none; flex-direction: column; overflow: hidden;
    }
    #chatWindow.open { display: flex; }
    @media(max-width:640px){ #chatWindow { width: calc(100vw - 2rem); right: 1rem; left: 1rem; } }
    .chat-header { background: linear-gradient(135deg,#f97316,#f59e0b); color: #fff; padding: 14px 16px; display: flex; align-items: center; justify-content: space-between; font-weight: 800; }
    .chat-header span { display: flex; align-items: center; gap: 8px; }
    .chat-close-btn { width: 28px; height: 28px; border-radius: 8px; background: rgba(255,255,255,.25); border: none; color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; }
    #chatBody { padding: 12px; overflow-y: auto; height: 320px; font-size: .85rem; display: flex; flex-direction: column; gap: 8px; background: var(--bg-color); }
    .chat-input-wrap { padding: 8px; border-top: 1px solid var(--border-color); display: flex; gap: 6px; background: var(--card-bg); }
    #chatInput { flex: 1; padding: 9px 12px; border: 1.5px solid var(--border-color); border-radius: 10px; font-size: .82rem; outline: none; font-family: inherit; background: var(--bg-color); color: var(--text-main); }
    #chatInput:focus { border-color: var(--orange); }
    .chat-send-btn { background: var(--orange); color: #fff; border: none; padding: 9px 14px; border-radius: 10px; cursor: pointer; transition: all .2s; }
    .chat-send-btn:hover { background: var(--orange-dark); transform: scale(1.05); }

    .mascot-container { position: fixed; bottom: 22px; right: 22px; z-index: 1000; cursor: pointer; user-select: none; }
    .mascot-kangaroo { width: 70px; height: 90px; filter: drop-shadow(0 10px 15px rgba(249,115,22,.3)); transition: transform .3s cubic-bezier(.34,1.56,.64,1); }
    .mascot-kangaroo.jump { animation: kangarooJump .6s ease; }
    @keyframes kangarooJump {
      0%,100% { transform: translateY(0) scale(1); }
      30% { transform: translateY(-20px) scale(1.1) rotate(-8deg); }
      60% { transform: translateY(-10px) scale(1) rotate(5deg); }
    }

    @media(max-width:768px){
      .top-navbar { padding: 8px 10px; border-radius: 16px; }
      .nav-title { font-size: .85rem; }
      .nav-subtitle { font-size: .6rem; }
      .main-tab { font-size: .9rem; padding: 14px 12px; }
      .main-tab i { font-size: 1.2rem; }
    }
  </style>
</head>
<body>

  <div class="animated-bg">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
    <div class="dot dot-1"></div>
    <div class="dot dot-2"></div>
    <div class="dot dot-3"></div>
    <div class="dot dot-4"></div>
    <div class="dot dot-5"></div>
  </div>

  <nav class="top-navbar">
    <div class="nav-brand">
      <div class="nav-icon"><i class="fa-solid fa-heart-pulse"></i></div>
      <div>
        <div class="nav-title">ENSTP <span>Santé & Sport</span></div>
        <div class="nav-subtitle" data-i18n="nav_app_sub">المدرسة الوطنية العليا</div>
      </div>
    </div>
    <button class="nav-menu-btn" id="menuBtn" onclick="toggleMenu()" title="القائمة">
      <i class="fa-solid fa-sliders"></i>
    </button>
  </nav>

  <div class="nav-dropdown" id="navDropdown">
    <div class="dropdown-section">
      <div class="dropdown-label">🌐 <span data-i18n="menu_lang">اللغة</span></div>
      <div class="dropdown-row">
        <button class="dropdown-btn active" onclick="setLanguage('ar')" id="btn-ar">🇩🇿 العربية</button>
        <button class="dropdown-btn" onclick="setLanguage('fr')" id="btn-fr">🇫🇷 Français</button>
        <button class="dropdown-btn" onclick="setLanguage('en')" id="btn-en">🇬🇧 English</button>
      </div>
    </div>
    <div class="dropdown-section">
      <div class="dropdown-label">⚙️ <span data-i18n="menu_settings">الإعدادات</span></div>
      <div class="dropdown-row">
        <button class="dropdown-btn" onclick="toggleDarkMode()" id="themeBtn">
          <i class="fa-solid fa-moon"></i> <span data-i18n="menu_dark">ليلي</span>
        </button>
        <a href="index.html" class="dropdown-btn">
          <i class="fa-solid fa-house"></i> <span data-i18n="nav_home">الرئيسية</span>
        </a>
      </div>
    </div>
  </div>

  <header class="page-hero">
    <h1><span data-i18n="hero_1">صحتي</span> <span data-i18n="hero_2">ورياضتي</span></h1>
    <p data-i18n="sport_desc">الرياضة والصحة في المدرسة وحولها.</p>
  </header>

  <div class="main-tabs">
    <button class="main-tab sport active" onclick="switchSection('sport')" id="tab-sport">
      <i class="fa-solid fa-dumbbell"></i>
      <span data-i18n="tab_sport">الرياضة</span>
    </button>
    <button class="main-tab health" onclick="switchSection('sante')" id="tab-sante">
      <i class="fa-solid fa-stethoscope"></i>
      <span data-i18n="tab_sante">الصحة</span>
    </button>
  </div>

  <main class="content-wrap">
    <div id="filtersBar" class="filters-bar"></div>
    <div id="itemsGrid"></div>
  </main>

  <footer class="site-footer">
    <div class="footer-copy">© 2026 ENSTP Kouba · <span data-i18n="footer_rights">جميع الحقوق محفوظة</span></div>
  </footer>

  <div id="itemModal">
    <div class="modal-card">
      <button class="modal-close" onclick="closeModal()"><i class="fa-solid fa-xmark"></i></button>
      <div class="modal-header">
        <h2 class="modal-title" id="modalTitle"></h2>
        <div class="modal-subtitle" id="modalSubtitle"></div>
      </div>
      <div id="modalVideoContainer" class="modal-section" style="display:none;">
        <h4><i class="fa-brands fa-youtube" style="color:#ef4444;"></i> <span data-i18n="modal_video">فيديو:</span></h4>
        <div id="modalVideo" class="video-wrap"></div>
      </div>
      <div id="modalGalleryContainer" class="modal-section" style="display:none;">
        <h4><i class="fa-solid fa-images"></i> <span data-i18n="modal_gallery">معرض الصور:</span></h4>
        <div id="modalGallery" class="gallery-scroll"></div>
      </div>
      <div id="modalAddressContainer" class="modal-section">
        <h4><i class="fa-solid fa-location-dot"></i> <span data-i18n="modal_address">العنوان:</span></h4>
        <div class="section-content" id="modalAddress"></div>
      </div>
      <div id="modalPhoneContainer" class="modal-section">
        <h4><i class="fa-solid fa-phone"></i> <span data-i18n="modal_phone">الهاتف:</span></h4>
        <div class="section-content" id="modalPhone" dir="ltr"></div>
      </div>
      <div id="modalScheduleContainer" class="modal-section">
        <h4><i class="fa-regular fa-clock"></i> <span data-i18n="modal_schedule">أوقات العمل:</span></h4>
        <div class="section-content" id="modalSchedule"></div>
      </div>
      <div id="modalMapContainer" class="modal-section" style="display:none;">
        <h4><i class="fa-solid fa-map-location-dot"></i> <span data-i18n="modal_map">الموقع:</span></h4>
        <div id="modalMap" class="map-wrap"></div>
        <a id="modalMapBtn" href="#" target="_blank" class="map-btn">
          <i class="fa-solid fa-map-location-dot"></i> <span data-i18n="open_in_maps">فتح في خرائط جوجل</span>
        </a>
      </div>
      <div class="reviews-box">
        <div class="reviews-header">
          <div class="reviews-title">
            <i class="fa-solid fa-comments"></i> <span data-i18n="reviews">آراء الزبائن</span>
            <span class="reviews-count-badge" id="modalReviewsCount">0</span>
          </div>
        </div>
        <div class="comments-list-inline" id="modalCommentsList"></div>
        <div class="comment-form-inline">
          <div class="input-row">
            <input type="text" id="modalNameInput" placeholder="اسمك (اختياري)" maxlength="30">
          </div>
          <div class="input-row">
            <input type="text" id="modalCommentInput" placeholder="أضف تعليقك..." maxlength="200">
            <button onclick="addModalComment()">إرسال</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mascot-container" id="kangarooContainer" title="المساعد">
    <svg class="mascot-kangaroo" id="kangarooSvg" viewBox="0 0 64 80" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="32" cy="76" rx="18" ry="3" fill="rgba(0,0,0,0.15)"/>
      <path d="M12 60 Q4 54 6 64 Q8 72 14 66 Z" fill="#ea580c"/>
      <ellipse cx="46" cy="68" rx="10" ry="5" fill="#ea580c"/>
      <ellipse cx="34" cy="52" rx="18" ry="16" fill="#f97316"/>
      <ellipse cx="36" cy="54" rx="10" ry="10" fill="#fed7aa"/>
      <ellipse cx="26" cy="64" rx="6" ry="3.5" fill="#ea580c"/>
      <ellipse cx="44" cy="28" rx="13" ry="12" fill="#f97316"/>
      <ellipse cx="38" cy="12" rx="4" ry="9" fill="#f97316" transform="rotate(-15 38 12)"/>
      <ellipse cx="38" cy="13" rx="2" ry="5.5" fill="#fed7aa" transform="rotate(-15 38 12)"/>
      <ellipse cx="50" cy="12" rx="4" ry="9" fill="#f97316" transform="rotate(15 50 12)"/>
      <ellipse cx="50" cy="13" rx="2" ry="5.5" fill="#fed7aa" transform="rotate(15 50 12)"/>
      <ellipse cx="48" cy="33" rx="7" ry="6" fill="#fed7aa"/>
      <ellipse cx="53" cy="31" rx="2" ry="1.5" fill="#7c2d12"/>
      <circle cx="46" cy="26" r="2.5" fill="#1a1410"/>
      <circle cx="46.8" cy="25.2" r="0.9" fill="#ffffff"/>
      <path d="M47 36 Q51 38 54 36" stroke="#7c2d12" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      <ellipse cx="28" cy="44" rx="5" ry="3" fill="#ea580c" transform="rotate(-30 28 44)"/>
      <circle cx="22" cy="38" r="4" fill="rgba(255,255,255,0.9)" stroke="#c2410c" stroke-width="1.5"/>
      <line x1="25" y1="41" x2="28" y2="44" stroke="#c2410c" stroke-width="2" stroke-linecap="round"/>
    </svg>
  </div>

  <div id="chatWindow">
    <div class="chat-header">
      <span><i class="fa-solid fa-comments"></i> <span data-i18n="chat_title">المساعد</span></span>
      <button class="chat-close-btn" onclick="toggleChat()"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div id="chatBody">
      <div style="background:rgba(249,115,22,.12);padding:9px 13px;border-radius:12px;color:var(--orange-dark);font-weight:600;" data-i18n="chat_welcome">مرحباً! 👋 كيف يمكنني مساعدتك؟</div>
    </div>
    <div class="chat-input-wrap">
      <input type="text" id="chatInput" data-i18n-placeholder="chat_placeholder" placeholder="اكتب سؤالك...">
      <button class="chat-send-btn" onclick="sendMessage()"><i class="fa-solid fa-paper-plane"></i></button>
    </div>
  </div>

  <!-- ============ البيانات الكاملة ============ -->
  <script>
    window.SPORT_DATA = {
      items: [
        /* ============================================
           🏋️ SPORT — ملعب المدرسة + كل الصالات + الفيديوهات
           ============================================ */

        // ملعب المدرسة
        {
          id: "stade-ecole", section: "sport", category: "salle",
          icon: "🏟️",
          title: { ar: "ملعب المدرسة", fr: "Stade de l'école", en: "School Stadium" },
          specialty: { ar: "ملعب متعدد الرياضات", fr: "Terrain multisports", en: "Multisport field" },
          desc: { ar: "ملعب متعدد الرياضات داخل حرم المدرسة.", fr: "Terrain multisports dans l'enceinte de l'école.", en: "Multisport field on school campus." },
          address: "داخل ENSTP", phone: "", schedule: null,
          images: ["s.HEIC", "s1.HEIC", "s2.HEIC", "s3.HEIC", "s4.HEIC", "s5.HEIC"],
          video: "", mapCoords: [36.7290, 3.0745]
        },

        // 7 صالات من sport.js
        {
          id: "salle-ares", section: "sport", category: "salle", icon: "🏋️",
          title: { fr: "Ares Sport", ar: "Ares Sport", en: "Ares Sport" },
          specialty: { fr: "Salle de sport", ar: "صالة رياضية", en: "Gym" },
          desc: null, address: "Kouba, Alger", phone: "", schedule: null,
          images: ["ares 1.jpg","ares 2.jpg","ares 3.jpg","ares 4.jpg"],
          video: "", mapCoords: [36.7270, 3.0740]
        },
        {
          id: "salle-femmes", section: "sport", category: "salle", icon: "💃",
          title: { fr: "Club des Femmes", ar: "نادي النساء", en: "Club des Femmes" },
          specialty: { fr: "Salle pour femmes", ar: "صالة رياضية للنساء", en: "Women's gym" },
          desc: null, address: "Kouba, Alger", phone: "", schedule: null,
          images: ["bas 1.jpg","bas 3.jpg","bas 4.jpg"],
          video: "", mapCoords: [36.7280, 3.0755]
        },
        {
          id: "salle-fitness-club", section: "sport", category: "salle", icon: "💪",
          title: { fr: "Fitness Club", ar: "Fitness Club", en: "Fitness Club" },
          specialty: { fr: "Salle de fitness", ar: "صالة لياقة", en: "Fitness gym" },
          desc: null, address: "Kouba, Alger", phone: "", schedule: null,
          images: ["club 1.jpg","club 2.jpg"],
          video: "", mapCoords: [36.7290, 3.0765]
        },
        {
          id: "salle-bouzid", section: "sport", category: "salle", icon: "🏋️",
          title: { fr: "Bouzid Club", ar: "Bouzid Club", en: "Bouzid Club" },
          specialty: { fr: "Salle de sport", ar: "صالة رياضية", en: "Gym" },
          desc: null, address: "Kouba, Alger", phone: "", schedule: null,
          images: ["bouzid 1.jpg","bouzid 2.jpg"],
          video: "", mapCoords: [36.7300, 3.0775]
        },
        {
          id: "salle-olympic", section: "sport", category: "salle", icon: "🏊",
          title: { fr: "Kouba Olympic", ar: "Kouba Olympic", en: "Kouba Olympic" },
          specialty: { fr: "Piscine et salle de sport", ar: "مسبح وصالة رياضية", en: "Pool and gym" },
          desc: null, address: "Kouba, Alger", phone: "", schedule: null,
          images: ["swiming 1.jpg","swiming 2.jpg"],
          video: "", mapCoords: [36.7310, 3.0785]
        },
        {
          id: "salle-fitness-city", section: "sport", category: "salle", icon: "💪",
          title: { fr: "Fitness City", ar: "Fitness City", en: "Fitness City" },
          specialty: { fr: "Salle de fitness", ar: "صالة لياقة", en: "Fitness gym" },
          desc: null, address: "Kouba, Alger", phone: "", schedule: null,
          images: ["city 1.jpg","city 2.jpg","city 3.jpg"],
          video: "", mapCoords: [36.7320, 3.0795]
        },
        {
          id: "salle-body-boost", section: "sport", category: "salle", icon: "💪",
          title: { fr: "Body Boost Gym", ar: "Body Boost Gym", en: "Body Boost Gym" },
          specialty: { fr: "Salle de musculation", ar: "صالة كمال أجسام", en: "Bodybuilding gym" },
          desc: null, address: "Kouba, Alger", phone: "", schedule: null,
          images: ["gym 1.jpg","gym 2.jpg","gym 3.jpg","gym 4.jpg","gym 5.jpg"],
          video: "", mapCoords: [36.7330, 3.0805]
        },

        // 3 فيديوهات من sport.js
        {
          id: "video-complexe", section: "sport", category: "video", icon: "🏟️",
          title: { fr: "Complexe Sportif de Kouba", ar: "المركب الرياضي القبة", en: "Kouba Sports Complex" },
          specialty: null,
          desc: { fr: "Découvrez le complexe sportif de Kouba en vidéo.", ar: "اكتشف المركب الرياضي القبة من خلال الفيديو.", en: "Discover the Kouba sports complex in video." },
          address: "Kouba, Alger", phone: "", schedule: null,
          images: [], video: "aqPng7nyFZU", mapCoords: null
        },
        {
          id: "video-garidi", section: "sport", category: "video", icon: "💪",
          title: { fr: "Vidéo motivante (Garidi)", ar: "فيديو تحفيزي (قاريدي)", en: "Motivating video (Garidi)" },
          specialty: null,
          desc: { fr: "Une vidéo motivante tournée à Garidi.", ar: "فيديو تحفيزي تم تصويره في قاريدي.", en: "A motivating video filmed in Garidi." },
          address: "", phone: "", schedule: null,
          images: [], video: "byDM5wQ3wcc", mapCoords: null
        },
        {
          id: "video-short", section: "sport", category: "video", icon: "🔥",
          title: { fr: "Short motivant", ar: "فيديو قصير ملهم", en: "Inspiring Short" },
          specialty: null,
          desc: { fr: "Un short inspirant pour te dépasser.", ar: "فيديو قصير ملهم لتجاوز نفسك.", en: "An inspiring short to push your limits." },
          address: "", phone: "", schedule: null,
          images: [], video: "https://youtube.com/shorts/s4IcvPRD5dY", mapCoords: null
        },

        /* ============================================
           🏥 SANTE — الأطباء + الأسنان + الصيدليات + طبيب المدرسة
           ============================================ */

        // طبيب المدرسة
        {
          id: "medecin-ecole", section: "sante", category: "medecin", icon: "🩺",
          title: { ar: "طبيب المدرسة", fr: "Médecin de l'école", en: "School Doctor" },
          specialty: { ar: "طب عام", fr: "Médecine générale", en: "General medicine" },
          desc: { ar: "طبيب عام في المدرسة، متاح للطلبة والموظفين.", fr: "Médecin généraliste à l'école, disponible pour étudiants et personnel.", en: "General practitioner at school, available to students and staff." },
          address: "داخل ENSTP", phone: "",
          schedule: { ar: "كل يوم ما عدا الجمعة والسبت: 8:00 - 16:00", fr: "Tous les jours sauf vendredi et samedi : 8h00 - 16h00", en: "Every day except Friday and Saturday: 8:00 - 16:00" },
          images: [], video: "", mapCoords: [36.7290, 3.0745]
        },

        // طبيب إقامة قريدي
        {
          id: "medecin-garidi", section: "sante", category: "medecin", icon: "🩺",
          title: { ar: "طبيب إقامة قريدي", fr: "Médecin résidence Garidi", en: "Garidi Residence Doctor" },
          specialty: { ar: "طب عام", fr: "Médecine générale", en: "General medicine" },
          desc: { ar: "طبيب في الإقامة الجامعية قريدي، بجانب المدرسة.", fr: "Médecin à la résidence universitaire de Garidi, à côté de l'école.", en: "Doctor at Garidi university residence, next to the school." },
          address: "الإقامة الجامعية قريدي", phone: "",
          schedule: { ar: "كل يوم ما عدا الجمعة والسبت: 8:00 - 16:00", fr: "Tous les jours sauf vendredi et samedi : 8h00 - 16h00", en: "Every day except Friday and Saturday: 8:00 - 16:00" },
          images: [], video: "", mapCoords: [36.7320, 3.0790]
        },

        // 9 أطباء من sport.js
        {
          id: "dr-aissani", section: "sante", category: "medecin", icon: "❤️",
          title: { fr: "Dr Farid Aissani", ar: "د. فريد عيساني", en: "Dr Farid Aissani" },
          specialty: { fr: "Cardiologie", ar: "أمراض القلب", en: "Cardiology" },
          desc: null, address: "Coopemad Sud, Bt 71/4, Kouba",
          phone: "023 70 54 57", schedule: null,
          images: [], video: "", mapCoords: [36.7260, 3.0750]
        },
        {
          id: "dr-bendali", section: "sante", category: "medecin", icon: "👶",
          title: { fr: "Dr Amina Bendali", ar: "د. أمينة بن دالي", en: "Dr Amina Bendali" },
          specialty: { fr: "Gynécologie-Obstétrique", ar: "أمراض النساء والتوليد", en: "Gynecology-Obstetrics" },
          desc: null, address: "Route des Annassers, Kouba",
          phone: "0553 24 07 60", schedule: null,
          images: [], video: "", mapCoords: [36.7275, 3.0765]
        },
        {
          id: "dr-ouabdesselam", section: "sante", category: "medecin", icon: "🧒",
          title: { fr: "Dr Houria Ouabdesselam", ar: "د. حورية وعباد السلام", en: "Dr Houria Ouabdesselam" },
          specialty: { fr: "Pédiatrie", ar: "طب الأطفال", en: "Pediatrics" },
          desc: null, address: "Jolie Vue 2, 1216 logements, Bt 12, Kouba",
          phone: "0697 28 58 17", schedule: null,
          images: [], video: "", mapCoords: [36.7285, 3.0780]
        },
        {
          id: "dr-bengherbi", section: "sante", category: "medecin", icon: "👁️",
          title: { fr: "Dr Mokhtar Bengherbi", ar: "د. مختار بن غربي", en: "Dr Mokhtar Bengherbi" },
          specialty: { fr: "Ophtalmologie", ar: "طب العيون", en: "Ophthalmology" },
          desc: null, address: "70 avenue des Frères Abdeslami, Kouba",
          phone: "023 60 16 78", schedule: null,
          images: [], video: "", mapCoords: [36.7290, 3.0800]
        },
        {
          id: "dr-debba", section: "sante", category: "medecin", icon: "👁️",
          title: { fr: "Dr Abdelghani Debba", ar: "د. عبد الغني دبة", en: "Dr Abdelghani Debba" },
          specialty: { fr: "Ophtalmologie", ar: "طب العيون", en: "Ophthalmology" },
          desc: null, address: "75 avenue des Frères Abdeslami, Vieux Kouba",
          phone: "0660 39 29 22", schedule: null,
          images: [], video: "", mapCoords: [36.7300, 3.0820]
        },
        {
          id: "dr-ait-allaoua", section: "sante", category: "medecin", icon: "👁️",
          title: { fr: "Dr Farid Ait Allaoua", ar: "د. فريد آيت علاوة", en: "Dr Farid Ait Allaoua" },
          specialty: { fr: "Ophtalmologie", ar: "طب العيون", en: "Ophthalmology" },
          desc: null, address: "43 rue des Frères Abdeslami, Kouba",
          phone: "0696 57 94 94", schedule: null,
          images: [], video: "", mapCoords: [36.7310, 3.0830]
        },
        {
          id: "dr-benantar", section: "sante", category: "medecin", icon: "🧒",
          title: { fr: "Dr Widad Benantar", ar: "د. وداد بن نتر", en: "Dr Widad Benantar" },
          specialty: { fr: "Pédiatrie", ar: "طب الأطفال", en: "Pediatrics" },
          desc: null, address: "Cité Sastra / Jolie Vue 2, Kouba",
          phone: "021 68 89 13", schedule: null,
          images: [], video: "", mapCoords: [36.7320, 3.0840]
        },
        {
          id: "dr-belhadj", section: "sante", category: "medecin", icon: "👶",
          title: { fr: "Dr Zineb Belhadj", ar: "د. زينب بلحاج", en: "Dr Zineb Belhadj" },
          specialty: { fr: "Gynécologie-Obstétrique", ar: "أمراض النساء والتوليد", en: "Gynecology-Obstetrics" },
          desc: null, address: "12 avenue des Frères Abdeslami, 1er étage, Kouba",
          phone: "0559 67 11 71", schedule: null,
          images: [], video: "", mapCoords: [36.7255, 3.0735]
        },
        {
          id: "pr-bouferrouk", section: "sante", category: "medecin", icon: "❤️",
          title: { fr: "Pr Bouferrouk", ar: "أ.د. بوفرق", en: "Pr Bouferrouk" },
          specialty: { fr: "Cardiologie", ar: "أمراض القلب", en: "Cardiology" },
          desc: null, address: "Cité Garidi 1, Bt 8 n°1, Kouba",
          phone: "0551 26 84 36", schedule: null,
          images: [], video: "", mapCoords: [36.7295, 3.0775]
        },

        // 4 عيادات أسنان من sport.js
        {
          id: "dent-gr", section: "sante", category: "dentiste", icon: "🦷",
          title: { fr: "Cabinet Dental GR", ar: "عيادة الأسنان GR", en: "Cabinet Dental GR" },
          specialty: { fr: "Dentiste", ar: "عيادة أسنان", en: "Dentist" },
          desc: null, address: "Kouba, Alger", phone: "0558 58 11 07", schedule: null,
          images: ["gr 1.jpg","gr 2.jpg","gr 3.jpg","gr 4.jpg","gr 5.jpg","gr6.jpg"],
          video: "", mapCoords: [36.7280, 3.0750]
        },
        {
          id: "dent-kouba", section: "sante", category: "dentiste", icon: "🦷",
          title: { fr: "Cabinet Dentaire Kouba", ar: "عيادة الأسنان القبة", en: "Cabinet Dentaire Kouba" },
          specialty: { fr: "Dentiste", ar: "عيادة أسنان", en: "Dentist" },
          desc: null, address: "Kouba, Alger", phone: "0666 42 12 72", schedule: null,
          images: ["cabinet1.jpg"],
          video: "", mapCoords: [36.7290, 3.0760]
        },
        {
          id: "dent-nn", section: "sante", category: "dentiste", icon: "🦷",
          title: { fr: "NN Cabinet Dentaire", ar: "عيادة الأسنان NN", en: "NN Cabinet Dentaire" },
          specialty: { fr: "Dentiste", ar: "عيادة أسنان", en: "Dentist" },
          desc: null, address: "Kouba, Alger", phone: "", schedule: null,
          images: ["nn1.jpg","nn2.jpg","nn3.jpg","nn4.jpg"],
          video: "", mapCoords: [36.7300, 3.0770]
        },
        {
          id: "dent-noui", section: "sante", category: "dentiste", icon: "🦷",
          title: { fr: "Cabinet Dentaire Dr Noui", ar: "عيادة الأسنان د. نوي", en: "Cabinet Dentaire Dr Noui" },
          specialty: { fr: "Dentiste", ar: "عيادة أسنان", en: "Dentist" },
          desc: null, address: "Kouba, Alger", phone: "", schedule: null,
          images: ["noui 1.jpg","noui 2.jpg","noui 3.jpg","noui 4.jpg","noui 5.jpg"],
          video: "", mapCoords: [36.7310, 3.0780]
        },

        // 8 صيدليات
        {
          id: "pharma-attoui", section: "sante", category: "pharma", icon: "💊",
          title: { ar: "صيدلية عطوي", fr: "Pharmacie Attoui", en: "Pharmacie Attoui" },
          specialty: { ar: "صيدلية عامة", fr: "Pharmacie générale", en: "General pharmacy" },
          desc: null, address: "Kouba, Alger", phone: "",
          schedule: { ar: "8:00 - 20:00", fr: "8h00 - 20h00", en: "8:00 - 20:00" },
          images: ["attoui 1.jpg","attoui 2.jpg","attoui 3.jpg","attoui 4.jpg","attoui 5.jpg"],
          video: "", mapCoords: [36.7260, 3.0750]
        },
        {
          id: "pharma-djarar", section: "sante", category: "pharma", icon: "💊",
          title: { ar: "صيدلية جرار", fr: "Pharmacie Djarar", en: "Pharmacie Djarar" },
          specialty: { ar: "صيدلية، مستحضرات تجميل طبية", fr: "Pharmacie, cosmétiques médicaux", en: "Pharmacy, medical cosmetics" },
          desc: null, address: "Kouba, Alger", phone: "",
          schedule: { ar: "8:30 - 21:00", fr: "8h30 - 21h00", en: "8:30 - 21:00" },
          images: ["djerar 1.jpg","djerar 3.jpg","djerar 4.jpg","djerar 5.jpg","djrar 2.jpg"],
          video: "", mapCoords: [36.7275, 3.0765]
        },
        {
          id: "pharma-hassani", section: "sante", category: "pharma", icon: "💊",
          title: { ar: "صيدلية حساني", fr: "Pharmacie Hassani", en: "Pharmacie Hassani" },
          specialty: { ar: "صيدلية، أدوية مزمنة", fr: "Pharmacie, médicaments chroniques", en: "Pharmacy, chronic medicines" },
          desc: null, address: "Kouba, Alger", phone: "",
          schedule: { ar: "9:00 - 19:30", fr: "9h00 - 19h30", en: "9:00 - 19:30" },
          images: ["hassani 1.jpg","hassani 2.jpg","hassani 3.jpg","hassani 4.jpg","hassani 5.jpg"],
          video: "", mapCoords: [36.7285, 3.0780]
        },
        {
          id: "pharma-hadibi", section: "sante", category: "pharma", icon: "💊",
          title: { ar: "صيدلية هديبي", fr: "Pharmacie Hadibi", en: "Pharmacie Hadibi" },
          specialty: { ar: "صيدلية، مستلزمات الأطفال", fr: "Pharmacie, articles pour bébés", en: "Pharmacy, baby supplies" },
          desc: null, address: "Kouba, Alger", phone: "",
          schedule: { ar: "8:00 - 20:00", fr: "8h00 - 20h00", en: "8:00 - 20:00" },
          images: ["hadibi 1.jpg","hadibi 2.jpg","hadibi 3.jpg"],
          video: "", mapCoords: [36.7290, 3.0800]
        },
        {
          id: "pharma-torkiche", section: "sante", category: "pharma", icon: "💊",
          title: { ar: "صيدلية تورشيش", fr: "Pharmacie Torkiche", en: "Pharmacie Torkiche" },
          specialty: { ar: "صيدلية، فحص ضغط وسكري", fr: "Pharmacie, tension et diabète", en: "Pharmacy, BP and diabetes check" },
          desc: null, address: "Kouba, Alger", phone: "",
          schedule: { ar: "8:00 - 21:00", fr: "8h00 - 21h00", en: "8:00 - 21:00" },
          images: ["torkich 1.jpg","torkich 2.jpg"],
          video: "", mapCoords: [36.7300, 3.0820]
        },
        {
          id: "pharma-harket", section: "sante", category: "pharma", icon: "💊",
          title: { ar: "صيدلية حاركيت", fr: "Pharmacie Harket", en: "Pharmacie Harket" },
          specialty: { ar: "صيدلية، عناية بالبشرة", fr: "Pharmacie, soins de la peau", en: "Pharmacy, skin care" },
          desc: null, address: "Kouba, Alger", phone: "",
          schedule: { ar: "9:00 - 20:00", fr: "9h00 - 20h00", en: "9:00 - 20:00" },
          images: ["harkat 1.jpg","harkat 2.jpg"],
          video: "", mapCoords: [36.7310, 3.0830]
        },
        {
          id: "pharma-baziz", section: "sante", category: "pharma", icon: "💊",
          title: { ar: "صيدلية بازيز", fr: "Pharmacie Baziz", en: "Pharmacie Baziz" },
          specialty: { ar: "صيدلية، مكملات غذائية", fr: "Pharmacie, compléments alimentaires", en: "Pharmacy, food supplements" },
          desc: null, address: "Kouba, Alger", phone: "",
          schedule: { ar: "8:30 - 20:30", fr: "8h30 - 20h30", en: "8:30 - 20:30" },
          images: ["baziz 1.jpg","baziz 2.jpg"],
          video: "", mapCoords: [36.7320, 3.0840]
        },
        {
          id: "pharma-chikhi", section: "sante", category: "pharma", icon: "💊",
          title: { ar: "صيدلية شيخي", fr: "Pharmacie Chikhi", en: "Pharmacie Chikhi" },
          specialty: { ar: "صيدلية مناوبة", fr: "Pharmacie de garde", en: "On-call pharmacy" },
          desc: null, address: "Kouba, Alger", phone: "",
          schedule: { ar: "8:00 - 22:00", fr: "8h00 - 22h00", en: "8:00 - 22:00" },
          images: ["chikhi 1.jpg","chikhi 2.jpg","chikhi 3.jpg"],
          video: "", mapCoords: [36.7255, 3.0735]
        }
      ]
    };
  </script>

  <!-- ============ الترجمة ============ -->
  <script>
    let currentLang = localStorage.getItem('enstp_lang') || 'ar';
    window.SPORT_TRANSLATIONS = {
      ar: {
        page_title: "صحتي ورياضتي - ENSTP",
        nav_app_sub: "المدرسة الوطنية العليا", nav_home: "الرئيسية",
        menu_lang: "اللغة", menu_settings: "الإعدادات", menu_dark: "ليلي",
        hero_1: "صحتي", hero_2: "ورياضتي",
        sport_desc: "الرياضة والصحة في المدرسة وحولها.",
        tab_sport: "الرياضة", tab_sante: "الصحة",
        filter_all: "الكل", filter_medecin: "الأطباء", filter_dentiste: "الأسنان",
        filter_salle: "الصالات الرياضية", filter_video: "الفيديوهات", filter_pharma: "الصيدليات",
        modal_video: "فيديو:", modal_gallery: "معرض الصور:",
        modal_address: "العنوان:", modal_phone: "الهاتف:", modal_schedule: "أوقات العمل:", modal_map: "الموقع:",
        open_in_maps: "فتح في خرائط جوجل", view_details: "عرض التفاصيل",
        reviews: "آراء الزبائن", add_comment: "أضف تعليقك...", your_name: "اسمك (اختياري)", send: "إرسال",
        no_comments: "لا توجد تعليقات بعد.", no_items: "لا توجد عناصر.",
        group_medecin: "طبيب", group_dentiste: "عيادة أسنان", group_salle: "صالة رياضية", group_video: "فيديو", group_pharma: "صيدلية",
        chat_title: "المساعد", chat_welcome: "مرحباً! 👋 كيف يمكنني مساعدتك؟",
        chat_placeholder: "اكتب سؤالك...", chat_default: "شكراً!",
        chat_hello: "أهلاً!", chat_thanks: "على الرحب والسعة!",
        footer_rights: "جميع الحقوق محفوظة"
      },
      fr: {
        page_title: "Santé & Sport - ENSTP",
        nav_app_sub: "École Nationale Supérieure", nav_home: "Accueil",
        menu_lang: "Langue", menu_settings: "Paramètres", menu_dark: "Sombre",
        hero_1: "Santé", hero_2: "& Sport",
        sport_desc: "Sport et santé à l'école et alentours.",
        tab_sport: "Sport", tab_sante: "Santé",
        filter_all: "Tous", filter_medecin: "Médecins", filter_dentiste: "Dentistes",
        filter_salle: "Salles de sport", filter_video: "Vidéos", filter_pharma: "Pharmacies",
        modal_video: "Vidéo :", modal_gallery: "Galerie :",
        modal_address: "Adresse :", modal_phone: "Téléphone :", modal_schedule: "Horaires :", modal_map: "Emplacement :",
        open_in_maps: "Ouvrir dans Google Maps", view_details: "Voir détails",
        reviews: "Avis des clients", add_comment: "Ajoutez un commentaire...", your_name: "Votre nom (optionnel)", send: "Envoyer",
        no_comments: "Aucun commentaire.", no_items: "Aucun élément.",
        group_medecin: "Médecin", group_dentiste: "Dentiste", group_salle: "Salle de sport", group_video: "Vidéo", group_pharma: "Pharmacie",
        chat_title: "Assistant", chat_welcome: "Bonjour ! 👋 Comment puis-je vous aider ?",
        chat_placeholder: "Votre question...", chat_default: "Merci !",
        chat_hello: "Bienvenue !", chat_thanks: "Avec plaisir !",
        footer_rights: "Tous droits réservés"
      },
      en: {
        page_title: "Health & Sport - ENSTP",
        nav_app_sub: "National Higher School", nav_home: "Home",
        menu_lang: "Language", menu_settings: "Settings", menu_dark: "Dark",
        hero_1: "Health", hero_2: "& Sport",
        sport_desc: "Sport and health at school and nearby.",
        tab_sport: "Sport", tab_sante: "Health",
        filter_all: "All", filter_medecin: "Doctors", filter_dentiste: "Dentists",
        filter_salle: "Gyms", filter_video: "Videos", filter_pharma: "Pharmacies",
        modal_video: "Video:", modal_gallery: "Gallery:",
        modal_address: "Address:", modal_phone: "Phone:", modal_schedule: "Hours:", modal_map: "Location:",
        open_in_maps: "Open in Google Maps", view_details: "View details",
        reviews: "Customer reviews", add_comment: "Add your comment...", your_name: "Your name (optional)", send: "Send",
        no_comments: "No comments yet.", no_items: "No items.",
        group_medecin: "Doctor", group_dentiste: "Dentist", group_salle: "Gym", group_video: "Video", group_pharma: "Pharmacy",
        chat_title: "Assistant", chat_welcome: "Hello! 👋 How can I help you?",
        chat_placeholder: "Your question...", chat_default: "Thanks!",
        chat_hello: "Welcome!", chat_thanks: "You're welcome!",
        footer_rights: "All rights reserved"
      }
    };

    function t(key){
      const d = window.SPORT_TRANSLATIONS[currentLang] || window.SPORT_TRANSLATIONS.ar;
      return d[key] || key;
    }
    window.t = t;

    function applyTranslation(lang){
      const d = window.SPORT_TRANSLATIONS[lang] || window.SPORT_TRANSLATIONS.ar;
      if(d.page_title) document.title = d.page_title;
      document.querySelectorAll('[data-i18n]').forEach(el=>{
        const k = el.getAttribute('data-i18n');
        if(d[k]){
          const icon = el.querySelector('i');
          if(icon){ el.innerHTML=''; el.appendChild(icon); el.appendChild(document.createTextNode(' '+d[k])); }
          else el.innerText = d[k];
        }
      });
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
        const k = el.getAttribute('data-i18n-placeholder');
        if(d[k]) el.placeholder = d[k];
      });
      document.documentElement.dir = (lang==='ar') ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;
      updateThemeBtn();
      renderFilters();
      renderItems();
    }

    function setLanguage(lang){
      currentLang = lang;
      localStorage.setItem('enstp_lang', lang);
      document.querySelectorAll('.dropdown-btn').forEach(b=>b.classList.remove('active'));
      const b = document.getElementById('btn-'+lang); if(b) b.classList.add('active');
      applyTranslation(lang);
    }
    window.setLanguage = setLanguage;
  </script>

  <!-- ============ المنطق ============ -->
  <script>
    const htmlEl = document.documentElement;
    if(localStorage.getItem('theme')==='dark') htmlEl.setAttribute('data-theme','dark');

    let currentSection = 'sport';
    let currentFilter = 'all';
    let currentOpenItem = null;

    function toggleDarkMode(){
      const isDark = htmlEl.getAttribute('data-theme')==='dark';
      htmlEl.setAttribute('data-theme', isDark?'light':'dark');
      localStorage.setItem('theme', htmlEl.getAttribute('data-theme'));
      updateThemeBtn();
    }
    function updateThemeBtn(){
      const tb = document.getElementById('themeBtn'); if(!tb) return;
      const d = window.SPORT_TRANSLATIONS[currentLang] || window.SPORT_TRANSLATIONS.ar;
      const isDark = htmlEl.getAttribute('data-theme')==='dark';
      tb.innerHTML = isDark
        ? '<i class="fa-solid fa-sun"></i> <span>'+d.menu_dark+'</span>'
        : '<i class="fa-solid fa-moon"></i> <span>'+d.menu_dark+'</span>';
    }
    function toggleMenu(){
      document.getElementById('navDropdown').classList.toggle('open');
      document.getElementById('menuBtn').classList.toggle('active');
    }
    document.addEventListener('click', e=>{
      const dd = document.getElementById('navDropdown');
      const btn = document.getElementById('menuBtn');
      if(!dd.contains(e.target) && !btn.contains(e.target)){
        dd.classList.remove('open'); btn.classList.remove('active');
      }
    });

    function switchSection(sec){
      currentSection = sec;
      currentFilter = 'all';
      document.getElementById('tab-sport').classList.toggle('active', sec==='sport');
      document.getElementById('tab-sante').classList.toggle('active', sec==='sante');
      document.body.classList.toggle('health-mode', sec==='sante');
      renderFilters();
      renderItems();
    }

    function setFilter(f){
      currentFilter = f;
      renderFilters();
      renderItems();
    }

    function renderFilters(){
      const bar = document.getElementById('filtersBar');
      bar.innerHTML = '';

      let filters;
      if(currentSection === 'sport'){
        filters = [
          { key: 'all', label: t('filter_all'), icon: 'fa-list' },
          { key: 'salle', label: t('filter_salle'), icon: 'fa-dumbbell' },
          { key: 'video', label: t('filter_video'), icon: 'fa-video' }
        ];
      } else {
        filters = [
          { key: 'all', label: t('filter_all'), icon: 'fa-list' },
          { key: 'medecin', label: t('filter_medecin'), icon: 'fa-stethoscope' },
          { key: 'dentiste', label: t('filter_dentiste'), icon: 'fa-tooth' },
          { key: 'pharma', label: t('filter_pharma'), icon: 'fa-pills' }
        ];
      }

      filters.forEach(f=>{
        const btn = document.createElement('button');
        btn.className = 'filter-chip' + (f.key === currentFilter ? ' active' : '');
        btn.innerHTML = `<i class="fa-solid ${f.icon}"></i> <span>${f.label}</span>`;
        btn.onclick = ()=> setFilter(f.key);
        bar.appendChild(btn);
      });
    }

    let carouselIntervals = [];
    function startCarousels(){
      carouselIntervals.forEach(i=>clearInterval(i));
      carouselIntervals = [];
      document.querySelectorAll('.sport-card-cover[data-carousel]').forEach(wrap=>{
        const track = wrap.querySelector('.carousel-track');
        const dots = wrap.querySelectorAll('.carousel-dots span');
        const count = track.children.length;
        if(count <= 1) return;
        let idx = 0;
        const interval = setInterval(()=>{
          idx = (idx + 1) % count;
          track.style.transform = `translateX(-${idx*100}%)`;
          dots.forEach((d,i)=>d.classList.toggle('active', i===idx));
        }, 3000);
        carouselIntervals.push(interval);
      });
    }

    function safeId(name){ return name.replace(/[^a-zA-Z0-9]/g,'_'); }

    function renderItems(){
      const grid = document.getElementById('itemsGrid');
      grid.innerHTML = '';
      let items = window.SPORT_DATA.items;

      if(currentSection === 'sport'){
        items = items.filter(i => i.section==='sport');
        if(currentFilter === 'salle') items = items.filter(i => i.category === 'salle');
        else if(currentFilter === 'video') items = items.filter(i => i.category === 'video');
      } else {
        items = items.filter(i => i.section==='sante');
        if(currentFilter !== 'all') items = items.filter(i => i.category === currentFilter);
      }

      if(items.length === 0){
        grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-muted);font-weight:700;">${t('no_items')}</p>`;
        return;
      }

      items.forEach(item=>{
        const title = item.title[currentLang] || item.title.ar;
        const specialty = item.specialty ? (item.specialty[currentLang] || item.specialty.ar) : '';
        const desc = item.desc ? (item.desc[currentLang] || item.desc.ar) : '';
        const catLabel = t('group_' + item.category);

        let mediaHTML = '';
        if(item.video && item.video.trim() !== ''){
          const videoId = extractYoutubeId(item.video);
          if(videoId){
            mediaHTML = `<div class="sport-card-cover"><div class="video-wrap" style="border-radius:0;border:none;height:100%;padding-bottom:0;"><iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen loading="lazy" style="position:relative;height:190px;"></iframe></div><span class="sport-card-cat">${item.icon} ${catLabel}</span></div>`;
          } else {
            mediaHTML = `<div class="sport-card-cover"><div class="no-img">${item.icon}</div><span class="sport-card-cat">${item.icon} ${catLabel}</span></div>`;
          }
        } else if(item.images && item.images.length > 0){
          const imgs = item.images.map(src=>`<img src="${src}" alt="${title}" onerror="this.style.display='none'">`).join('');
          const dots = item.images.map((_,i)=>`<span class="${i===0?'active':''}"></span>`).join('');
          mediaHTML = `
            <div class="sport-card-cover" data-carousel>
              <div class="carousel-track">${imgs}</div>
              ${item.images.length>1?`<div class="carousel-dots">${dots}</div>`:''}
              <span class="sport-card-cat">${item.icon} ${catLabel}</span>
            </div>
          `;
        } else {
          mediaHTML = `
            <div class="sport-card-cover">
              <div class="no-img">${item.icon}</div>
              <span class="sport-card-cat">${item.icon} ${catLabel}</span>
            </div>
          `;
        }

        const card = document.createElement('div');
        card.className = 'sport-card';
        card.onclick = ()=> openModal(item);
        card.innerHTML = `
          ${mediaHTML}
          <div class="sport-card-body">
            <h3 class="sport-card-title">${title || specialty}</h3>
            ${specialty && title ? `<p class="sport-card-specialty">${specialty}</p>` : ''}
            ${desc ? `<p class="sport-card-desc">${desc}</p>` : ''}
            ${item.address ? `<div class="sport-card-meta"><span><i class="fa-solid fa-location-dot"></i>${item.address}</span></div>` : ''}
            ${item.phone ? `<div class="sport-card-meta"><span dir="ltr"><i class="fa-solid fa-phone"></i>${item.phone}</span></div>` : ''}
            <div class="sport-card-footer">
              <i class="fa-solid fa-eye"></i> <span>${t('view_details')}</span>
            </div>
          </div>
        `;
        grid.appendChild(card);
      });

      startCarousels();
    }

    function loadComments(itemId){
      const saved = JSON.parse(localStorage.getItem('comments_sport_'+safeId(itemId)) || '[]');
      const list = document.getElementById('modalCommentsList');
      const count = document.getElementById('modalReviewsCount');
      if(count) count.innerText = saved.length;
      if(!list) return;
      if(saved.length === 0){
        list.innerHTML = `<p class="no-comments">${t('no_comments')}</p>`;
        return;
      }
      list.innerHTML = saved.map(c=>`<div class="comment-item"><strong>${c.name||'👤'}:</strong> ${c.text}</div>`).join('');
    }

    function addModalComment(){
      if(!currentOpenItem) return;
      const nameEl = document.getElementById('modalNameInput');
      const cmtEl = document.getElementById('modalCommentInput');
      if(!cmtEl || !cmtEl.value.trim()) return;
      const key = 'comments_sport_'+safeId(currentOpenItem.id);
      const saved = JSON.parse(localStorage.getItem(key) || '[]');
      saved.push({ name: (nameEl&&nameEl.value.trim())||'👤', text: cmtEl.value.trim(), date: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(saved));
      cmtEl.value = ''; if(nameEl) nameEl.value = '';
      loadComments(currentOpenItem.id);
    }

    function extractYoutubeId(url){
      if(!url) return null;
      if(url.length === 11 && !url.includes('/') && !url.includes('.')) return url;
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
      const match = url.match(regExp);
      return (match && match[2].length === 11) ? match[2] : null;
    }

    function openModal(item){
      currentOpenItem = item;
      const modal = document.getElementById('itemModal');
      modal.classList.add('open');

      const title = item.title[currentLang] || item.title.ar;
      const specialty = item.specialty ? (item.specialty[currentLang] || item.specialty.ar) : '';
      document.getElementById('modalTitle').innerText = title || specialty;
      document.getElementById('modalSubtitle').innerText = (title && specialty) ? specialty : '';

      // Video
      const vc = document.getElementById('modalVideoContainer');
      const vd = document.getElementById('modalVideo');
      const videoId = item.video ? extractYoutubeId(item.video) : null;
      if(videoId){
        vc.style.display = 'block';
        vd.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>`;
      } else vc.style.display = 'none';

      // Gallery
      const gc = document.getElementById('modalGalleryContainer');
      const g = document.getElementById('modalGallery');
      g.innerHTML = '';
      if(item.images && item.images.length > 0){
        gc.style.display = 'block';
        item.images.forEach(img=>{
          g.innerHTML += `<div class="gallery-item" onclick="window.open('${img}','_blank')">
            <img src="${img}" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:.75rem;\\'>Image</div>'">
          </div>`;
        });
      } else gc.style.display = 'none';

      // Address
      const ac = document.getElementById('modalAddressContainer');
      if(item.address){ ac.style.display='block'; document.getElementById('modalAddress').innerText = item.address; }
      else ac.style.display = 'none';

      // Phone
      const pc = document.getElementById('modalPhoneContainer');
      if(item.phone){ pc.style.display='block'; document.getElementById('modalPhone').innerText = item.phone; }
      else pc.style.display = 'none';

      // Schedule
      const sc = document.getElementById('modalScheduleContainer');
      if(item.schedule){
        sc.style.display='block';
        document.getElementById('modalSchedule').innerText = item.schedule[currentLang] || item.schedule.ar;
      } else sc.style.display = 'none';

      // Map
      const mc = document.getElementById('modalMapContainer');
      const md = document.getElementById('modalMap');
      const mb = document.getElementById('modalMapBtn');
      if(item.mapCoords){
        mc.style.display='block';
        const q = `${item.mapCoords[0]},${item.mapCoords[1]}`;
        md.innerHTML = `<iframe src="https://www.google.com/maps?q=${q}&output=embed" allowfullscreen loading="lazy"></iframe>`;
        mb.href = `https://www.google.com/maps/search/?api=1&query=${q}`;
      } else mc.style.display='none';

      loadComments(item.id);
      document.querySelector('.modal-card').scrollTop = 0;
    }

    function closeModal(){
      document.getElementById('itemModal').classList.remove('open');
      document.getElementById('modalMap').innerHTML = '';
      document.getElementById('modalVideo').innerHTML = '';
      currentOpenItem = null;
    }
    document.getElementById('itemModal').addEventListener('click', function(e){ if(e.target===this) closeModal(); });
    document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeModal(); });

    function toggleChat(){ document.getElementById('chatWindow').classList.toggle('open'); }
    function sendMessage(){
      const input = document.getElementById('chatInput');
      const body = document.getElementById('chatBody');
      if(!input || !body) return;
      const msg = input.value.trim(); if(!msg) return;
      body.innerHTML += `<div style="display:flex;justify-content:flex-end;"><div style="background:linear-gradient(135deg,#f97316,#ea580c);color:#fff;padding:9px 13px;border-radius:12px 12px 4px 12px;max-width:80%;font-size:.82rem;font-weight:600;">${msg}</div></div>`;
      input.value = '';
      body.scrollTop = body.scrollHeight;
      setTimeout(()=>{
        let reply = t('chat_default');
        const m = msg.toLowerCase();
        if(m.includes("رياضة")||m.includes("sport")||m.includes("ملعب")||m.includes("قاعة")) reply = "🏋️ " + t('sport_desc');
        else if(m.includes("صحة")||m.includes("santé")||m.includes("health")||m.includes("طبيب")) reply = "🩺 " + t('sport_desc');
        else if(m.includes("سلام")||m.includes("مرحبا")||m.includes("hello")||m.includes("bonjour")) reply = "👋 " + t('chat_hello');
        else if(m.includes("شكرا")||m.includes("merci")||m.includes("thanks")) reply = "💛 " + t('chat_thanks');
        body.innerHTML += `<div style="display:flex;justify-content:flex-start;"><div style="background:rgba(249,115,22,.12);color:var(--orange-dark);padding:9px 13px;border-radius:12px 12px 12px 4px;max-width:80%;font-size:.82rem;font-weight:600;">${reply}</div></div>`;
        body.scrollTop = body.scrollHeight;
      }, 500);
    }
    const kangarooContainer = document.getElementById('kangarooContainer');
    const kangarooSvg = document.getElementById('kangarooSvg');
    if(kangarooContainer){
      kangarooContainer.addEventListener('click', ()=>{
        if(kangarooSvg){
          kangarooSvg.classList.remove('jump'); void kangarooSvg.offsetHeight;
          kangarooSvg.classList.add('jump');
          setTimeout(()=>kangarooSvg.classList.remove('jump'), 700);
        }
        toggleChat();
      });
    }

    document.addEventListener('DOMContentLoaded', ()=>{
      const saved = localStorage.getItem('enstp_lang') || 'ar';
      currentLang = saved;
      document.querySelectorAll('.dropdown-btn').forEach(b=>b.classList.remove('active'));
      const b = document.getElementById('btn-'+saved); if(b) b.classList.add('active');
      applyTranslation(saved);
      renderFilters();
      renderItems();
      const ci = document.getElementById('chatInput');
      if(ci) ci.addEventListener('keypress', e=>{ if(e.key==='Enter'){ e.preventDefault(); sendMessage(); } });
    });
  </script>
</body>
</html>
