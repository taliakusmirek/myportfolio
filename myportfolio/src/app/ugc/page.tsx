'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function UGCPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>taliadoux</title>
        <link rel="icon" href="/icons/instagram.svg" type="image/svg+xml" />
      </Head>
      <style jsx global>{`
        :root {
          --pink-bg: #FFF0F3;
          --pink-mid: #FFD6E0;
          --pink-deep: #F5A8BF;
          --pink-accent: #E8759A;
          --pink-hot: #D94F7A;
          --black: #0D0D0D;
          --charcoal: #1C1C1C;
          --white: #FFFFFF;
          --off-white: #FFFBFC;
          --muted: #9A8890;
          --divider: #F0DDE4;
          --green: #7EB88A;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          font-family: 'DM Sans', sans-serif;
          background: var(--off-white);
          color: var(--black);
          overflow-x: hidden;
        }

        /* NAV */
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 200;
          padding: 20px 56px;
          display: flex; align-items: center; justify-content: space-between;
          background: rgba(255,251,252,0.92);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--divider);
        }
        .nav-logo {
          font-family: 'Inter', sans-serif;
          font-weight: 700; font-size: 22px;
          color: var(--black); text-decoration: none;
        }
        .nav-links { display: flex; gap: 32px; list-style: none; align-items: center; }
        .nav-links a {
          text-decoration: none; font-size: 12px; font-weight: 500;
          letter-spacing: 0.09em; text-transform: uppercase; color: var(--muted);
          transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--black); }
        .nav-cta {
          background: var(--black); color: var(--white);
          padding: 10px 22px; border-radius: 100px;
          text-decoration: none; font-size: 12px; font-weight: 500;
          letter-spacing: 0.06em; text-transform: uppercase;
          transition: all 0.2s;
        }
        .nav-cta:hover { background: var(--pink-hot); transform: translateY(-1px); }

        /* HERO */
        .hero {
          min-height: 100vh;
          background: linear-gradient(160deg, #FFE4EE 0%, #FFF0F5 40%, #FFD6E2 80%, #FFEAF1 100%);
          position: relative; overflow: hidden;
          display: flex; flex-direction: column;
          padding-top: 72px;
        }
        .blob1 {
          position: absolute; width: 700px; height: 700px; border-radius: 50%;
          background: radial-gradient(circle, rgba(217,79,122,0.15) 0%, transparent 65%);
          top: -200px; right: -150px; pointer-events: none;
        }
        .blob2 {
          position: absolute; width: 480px; height: 480px; border-radius: 50%;
          background: radial-gradient(circle, rgba(245,168,191,0.2) 0%, transparent 65%);
          bottom: -60px; left: 80px; pointer-events: none;
        }

        /* Big "Hey, there" above image */
        .hero-title-row {
          position: relative; z-index: 10;
          display: flex; align-items: center; justify-content: center;
          padding: 20px 56px 10px;
          gap: 0;
        }
        .hero-hey, .hero-there {
          font-family: 'Playfair Display', serif;
          font-style: italic; font-weight: 400;
          font-size: clamp(76px, 11vw, 156px);
          color: var(--black); line-height: 0.88;
          letter-spacing: -5px;
          animation: fadeUp 0.7s ease both;
        }
        .hero-there { animation-delay: 0.07s; }
        .hero-comma { color: var(--pink-hot); }

        /* Photo block below "Hey, there" */
        .hero-mid {
          position: relative; z-index: 5;
          display: flex; justify-content: center;
          margin-top: 0px;
        }

        .hero-status-pill {
          position: absolute;
          left: calc(50% - clamp(120px,13vw,200px) - 220px);
          bottom: 60px; z-index: 20;
          background: var(--white);
          border: 1.5px solid var(--divider);
          border-radius: 100px;
          padding: 9px 18px;
          display: flex; align-items: center; gap: 8px;
          font-size: 12px; font-weight: 500;
          box-shadow: 0 4px 16px rgba(0,0,0,0.07);
          white-space: nowrap;
          animation: fadeUp 0.7s 0.3s ease both;
        }
        .sdot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--green);
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(126,184,138,0.5); }
          50% { box-shadow: 0 0 0 7px rgba(126,184,138,0); }
        }

        .hero-photo {
          width: clamp(240px, 26vw, 400px);
          aspect-ratio: 3/4;
          border-radius: 240px 240px 0 0;
          overflow: hidden;
          background: linear-gradient(170deg, #F7C0D0 0%, #E8759A 60%, #C43468 100%);
          flex-shrink: 0; z-index: 6;
          animation: fadeUp 0.9s 0.04s ease both;
          box-shadow: 0 28px 72px rgba(217,79,122,0.22);
        }
        .hero-photo img {
          width: 100%; height: 100%; object-fit: cover; display: block;
        }
        .hero-photo-inner {
          width: 100%; height: 100%;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          color: rgba(255,255,255,0.75);
          text-align: center; gap: 10px;
          padding: 20px;
        }
        .hero-photo-inner span { font-size: 48px; }
        .hero-photo-inner strong { font-size: 15px; color: var(--white); display: block; }
        .hero-photo-inner p { font-size: 11px; opacity: 0.65; line-height: 1.5; max-width: 130px; }

        .hero-spec-text {
          position: absolute;
          right: calc(50% - clamp(120px,13vw,200px) - 210px);
          bottom: 90px; z-index: 20;
          font-size: 13px; line-height: 1.8; color: var(--charcoal);
          max-width: 190px;
          animation: fadeUp 0.7s 0.25s ease both;
        }

        /* Big name + role at bottom — modern font */
        .hero-bottom {
          position: relative; z-index: 10;
          display: flex; align-items: flex-end; justify-content: space-between;
          padding: 0 56px 44px;
          margin-top: -16px;
        }
        .hero-name {
          font-family: 'Inter', sans-serif;
          font-weight: 900; font-style: normal;
          font-size: clamp(52px, 7.5vw, 112px);
          line-height: 0.88; letter-spacing: -3px;
          color: var(--black); text-transform: uppercase;
          animation: fadeUp 0.8s 0.1s ease both;
        }
        .hero-role {
          font-family: 'Inter', sans-serif;
          font-weight: 700; font-style: normal;
          font-size: clamp(26px, 3.4vw, 50px);
          line-height: 1.08; letter-spacing: -1.5px;
          text-transform: uppercase; text-align: right;
          color: var(--black);
          animation: fadeUp 0.8s 0.15s ease both;
        }
        .hero-role em { font-style: italic; color: var(--pink-hot); font-weight: 400; }

        /* Stats strip */
        .hero-stats {
          display: flex; border-top: 1px solid var(--divider);
          background: var(--white); position: relative; z-index: 10;
        }
        .stat-box {
          flex: 1; padding: 26px 40px;
          border-right: 1px solid var(--divider);
          animation: fadeUp 0.8s 0.22s ease both;
        }
        .stat-box:last-child { border-right: none; }
        .stat-n {
          font-family: 'Inter', sans-serif;
          font-size: 36px; font-weight: 700; line-height: 1;
          color: var(--black); margin-bottom: 5px;
        }
        .stat-l {
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* SECTION BASE */
        section { padding: 96px 56px; }
        .eyebrow {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--pink-hot); margin-bottom: 16px;
          display: flex; align-items: center; gap: 12px;
        }
        .eyebrow::after { content:''; flex:1; max-width:48px; height:1.5px; background:var(--pink-deep); }
        .sec-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(34px,4vw,56px);
          font-weight: 900; letter-spacing: -2px; line-height: 1.02; margin-bottom: 18px;
        }
        .sec-title em { font-style: italic; font-weight: 400; color: var(--pink-hot); }

        /* WHAT I DO */
        #whatido { background: var(--pink-bg); }
        .wd-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .wd-left .lead { font-size: 17px; line-height: 1.8; color: #3A2F34; margin-bottom: 28px; }
        .pill-row { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 36px; }
        .pill {
          padding: 7px 16px; border-radius: 100px;
          background: var(--white); border: 1.5px solid var(--pink-mid);
          font-size: 13px; font-weight: 500; color: var(--charcoal);
        }
        .btn-p {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--pink-hot); color: var(--white);
          padding: 13px 26px; border-radius: 100px;
          text-decoration: none; font-size: 13px; font-weight: 500;
          letter-spacing: 0.05em; text-transform: uppercase;
          transition: all 0.25s;
        }
        .btn-p:hover { background: #C23668; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(217,79,122,0.3); }
        .btn-g {
          display: inline-flex; align-items: center; gap: 8px;
          border: 1.5px solid var(--black); color: var(--black);
          padding: 12px 24px; border-radius: 100px;
          text-decoration: none; font-size: 13px; font-weight: 500;
          letter-spacing: 0.05em; text-transform: uppercase;
          transition: all 0.25s; margin-left: 10px;
        }
        .btn-g:hover { background: var(--black); color: var(--white); }
        .wd-right { display: flex; flex-direction: column; gap: 18px; }
        .mc {
          background: var(--white); border: 1px solid var(--divider);
          border-radius: 20px; padding: 26px 28px;
          box-shadow: 0 4px 20px rgba(217,79,122,0.05);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .mc:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(217,79,122,0.1); }
        .mc-icon { font-size: 24px; margin-bottom: 10px; }
        .mc-title { font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 700; margin-bottom: 6px; }
        .mc-desc { font-size: 13px; line-height: 1.65; color: var(--muted); }

        /* PILLARS */
        #pillars { background: var(--white); }
        .pillars-intro { max-width: 540px; margin-bottom: 56px; }
        .pillars-intro p { font-size: 16px; line-height: 1.7; color: #5A4A50; margin-top: 12px; }
        .pg { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        .pc {
          border-radius: 24px; padding: 40px 32px;
          border: 1px solid var(--divider); background: var(--off-white);
          position: relative; overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .pc:hover { transform: translateY(-6px); box-shadow: 0 18px 50px rgba(217,79,122,0.1); }
        .pc::after {
          content:''; position: absolute; top:0; left:0; right:0; height:3px;
          background: linear-gradient(90deg, var(--pink-hot), var(--pink-deep));
          opacity: 0; transition: opacity 0.3s;
        }
        .pc:hover::after { opacity: 1; }
        .pc-num {
          font-family: 'Inter', sans-serif; font-size: 72px; font-weight: 900;
          color: var(--pink-mid); position: absolute; top: 14px; right: 22px;
          line-height: 1; pointer-events: none;
        }
        .pc-type { font-size: 10px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--pink-hot); margin-bottom: 10px; }
        .pc-name { font-family: 'Inter', sans-serif; font-size: 22px; font-weight: 700; margin-bottom: 10px; line-height: 1.2; }
        .pc-desc { font-size: 13px; line-height: 1.65; color: var(--muted); margin-bottom: 18px; }
        .pc-topics { display: flex; flex-direction: column; gap: 7px; }
        .pc-t { font-size: 13px; color: #3A2F34; display: flex; align-items: center; gap: 8px; }
        .pc-t::before { content:'—'; color: var(--pink-hot); font-weight: 700; }

        /* SERVICES */
        #services { background: var(--pink-bg); }
        .sg { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; margin-top: 52px; }
        .sc {
          background: var(--white); border-radius: 24px; padding: 34px 30px;
          border: 1px solid var(--divider);
          transition: transform 0.3s, box-shadow 0.3s; position: relative; overflow: hidden;
        }
        .sc:hover { transform: translateY(-6px); box-shadow: 0 16px 44px rgba(217,79,122,0.1); }
        .sbadge {
          display: inline-block; font-size: 10px; font-weight: 600; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--pink-hot);
          background: rgba(217,79,122,0.08); border: 1px solid rgba(217,79,122,0.2);
          padding: 4px 12px; border-radius: 100px; margin-bottom: 16px;
        }
        .st { font-family: 'Inter', sans-serif; font-size: 21px; font-weight: 700; margin-bottom: 9px; }
        .sd { font-size: 13px; line-height: 1.65; color: var(--muted); margin-bottom: 18px; }
        .slist { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .slist li { font-size: 13px; color: #3A2F34; display: flex; align-items: center; gap: 8px; }
        .slist li::before { content:'✦'; color: var(--pink-hot); font-size: 9px; }
        .sta { margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--divider); font-size: 12px; font-weight: 600; color: var(--pink-hot); }
        .sc.feat { background: var(--black); border-color: var(--black); }
        .sc.feat .st, .sc.feat .slist li { color: var(--white); }
        .sc.feat .sd { color: rgba(255,255,255,0.5); }
        .sc.feat .sta { color: var(--pink-deep); border-color: rgba(255,255,255,0.1); }
        .sc.feat .sbadge { background: rgba(245,168,191,0.15); color: var(--pink-deep); border-color: rgba(245,168,191,0.3); }
        .mpop {
          position: absolute; top: 18px; right: 18px;
          background: var(--pink-hot); color: var(--white);
          font-size: 10px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 4px 12px; border-radius: 100px;
        }

        /* WORKFLOW */
        #workflow { background: var(--black); color: var(--white); }
        #workflow .eyebrow { color: var(--pink-deep); }
        #workflow .eyebrow::after { background: var(--pink-deep); opacity: 0.35; }
        #workflow .sec-title { color: var(--white); }
        .wf-intro { max-width: 500px; margin-bottom: 56px; }
        .wf-intro p { font-size: 16px; line-height: 1.7; color: rgba(255,255,255,0.45); margin-top: 12px; }
        .wf-row {
          display: grid; grid-template-columns: repeat(5,1fr);
          background: rgba(255,255,255,0.05); border-radius: 24px; overflow: hidden; gap: 1px;
        }
        .ws {
          padding: 34px 26px; background: rgba(255,255,255,0.02);
          border-right: 1px solid rgba(255,255,255,0.06);
          transition: background 0.3s;
        }
        .ws:last-child { border-right: none; }
        .ws:hover { background: rgba(217,79,122,0.09); }
        .ws-n {
          font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 700;
          color: var(--pink-hot); letter-spacing: 0.12em; text-transform: uppercase;
          margin-bottom: 14px; display: flex; align-items: center; gap: 8px;
        }
        .ws-n::after { content:''; flex:1; height:1px; background: rgba(217,79,122,0.3); }
        .ws-title { font-weight: 600; font-size: 14px; margin-bottom: 7px; color: var(--white); }
        .ws-desc { font-size: 12px; line-height: 1.6; color: rgba(255,255,255,0.38); }

        /* TESTIMONIALS */
        #testimonials { background: var(--off-white); }
        .tg { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; margin-top: 52px; }
        .tc {
          background: var(--pink-bg); border: 1px solid var(--pink-mid);
          border-radius: 24px; padding: 38px;
          transition: transform 0.3s;
        }
        .tc:hover { transform: translateY(-4px); }
        .qm {
          font-family: 'Inter', sans-serif; font-size: 80px; font-weight: 900;
          color: var(--pink-mid); line-height: 0.7; margin-bottom: 16px; display: block;
        }
        .tt { font-size: 15px; line-height: 1.8; color: #3A2F34; font-style: italic; margin-bottom: 26px; }
        .ta { font-weight: 600; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; }
        .tco { font-size: 12px; color: var(--muted); margin-top: 2px; }

        /* CONTACT */
        #contact {
          background: linear-gradient(135deg, #FFE0EA 0%, #FFEEF4 55%, #FFD6E0 100%);
          text-align: center;
        }
        #contact .eyebrow { justify-content: center; }
        #contact .eyebrow::after { display: none; }
        #contact .sec-title { margin: 0 auto 16px; max-width: 500px; }
        .csub { font-size: 16px; color: #7A5A63; max-width: 400px; margin: 0 auto 40px; line-height: 1.7; }
        .cemail {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'Inter', sans-serif; font-size: 21px; font-style: italic;
          color: var(--black); text-decoration: none;
          border-bottom: 2px solid var(--pink-hot); padding-bottom: 3px;
          margin-bottom: 40px; transition: color 0.2s;
        }
        .cemail:hover { color: var(--pink-hot); }
        .cbtns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

        /* FOOTER */
        footer {
          background: var(--charcoal); padding: 58px 56px;
          display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 56px;
          color: rgba(255,255,255,0.5);
        }
        .flogo {
          font-family: 'Inter', sans-serif; font-weight: 700;
          font-size: 25px; color: var(--white); margin-bottom: 13px; display: block; text-decoration: none;
        }
        .ftag { font-size: 13px; line-height: 1.7; max-width: 260px; margin-bottom: 20px; }
        .femail { font-size: 13px; color: var(--pink-deep); text-decoration: none; }
        .femail:hover { opacity: 0.7; }
        .fct { font-size: 11px; font-weight: 600; letter-spacing: 0.13em; text-transform: uppercase; color: var(--white); margin-bottom: 16px; }
        .fl { list-style: none; display: flex; flex-direction: column; gap: 9px; }
        .fl a { text-decoration: none; font-size: 13px; color: rgba(255,255,255,0.42); transition: color 0.2s; }
        .fl a:hover { color: var(--white); }
        .fbot {
          background: var(--black); padding: 17px 56px;
          display: flex; justify-content: space-between; align-items: center;
        }
        .fbot p { font-size: 12px; color: rgba(255,255,255,0.28); }

        @media (max-width: 900px) {
          nav { padding: 16px 20px; }
          .nav-links { display: none; }
          .hero-hey, .hero-there { font-size: 54px; letter-spacing: -2px; }
          .hero-title-row { padding: 28px 20px 0; }
          .hero-status-pill, .hero-spec-text { display: none; }
          .hero-photo { width: clamp(200px,60vw,320px); }
          .hero-bottom { padding: 0 20px 32px; flex-direction: column; align-items: flex-start; gap: 12px; }
          .hero-name { font-size: 44px; }
          .hero-role { font-size: 22px; text-align: left; }
          .hero-stats { flex-direction: column; }
          .stat-box { border-right: none; border-bottom: 1px solid var(--divider); }
          section { padding: 64px 20px; }
          .wd-layout { grid-template-columns: 1fr; gap: 36px; }
          .pg, .sg, .tg { grid-template-columns: 1fr; }
          .wf-row { grid-template-columns: 1fr; }
          .ws { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
          footer { grid-template-columns: 1fr; gap: 32px; padding: 40px 20px; }
          .fbot { padding: 14px 20px; flex-direction: column; gap: 6px; text-align: center; }
        }
      `}</style>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      {/* HERO */}
      <div className="hero">
        <div className="blob1"></div>
        <div className="blob2"></div>

        {/* Big "Hey, there" above image */}
        <div className="hero-title-row">
          <span className="hero-hey">Hey<span className="hero-comma">,</span>&nbsp;</span>
          <span className="hero-there">there</span>
        </div>

        {/* Photo centered below */}
        <div className="hero-mid">
          <div className="hero-status-pill">
            <span className="sdot"></span>
            Available for new opportunities
          </div>

          <div className="hero-photo">
            <Image 
              src="/images/IMG_9905.jpg" 
              alt="Talia Kusmirek" 
              width={400} 
              height={533} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="hero-spec-text">
            AI x Gen Z<br/>Content Creator<br/>Short-Form Video &amp; UGC<br/>📍 Boston, MA
          </div>
        </div>

        {/* I AM TALIA + ROLE - with modern Inter font */}
        <div className="hero-bottom">
          <div className="hero-name">I AM<br/>TALIA</div>
          <div className="hero-role">AI x GEN Z<br/><em>Content</em><br/>CREATOR</div>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          <div className="stat-box">
            <div className="stat-n">20K+</div>
            <div className="stat-l">Followers</div>
          </div>
          <div className="stat-box">
            <div className="stat-n">507K</div>
            <div className="stat-l">Views / Month</div>
          </div>
          <div className="stat-box">
            <div className="stat-n">6.9%</div>
            <div className="stat-l">Engagement Rate</div>
          </div>
          <div className="stat-box">
            <div className="stat-n">50K–200K</div>
            <div className="stat-l">Avg Views / Video</div>
          </div>
        </div>
      </div>

      {/* WHAT I DO */}
      <section id="whatido">
        <div className="wd-layout">
          <div className="wd-left">
            <div className="eyebrow">What I Do</div>
            <h2 className="sec-title">I overthink everything<br/>so your audience<br/><em>doesn't have to.</em></h2>
            <p className="lead">I turn AI, careers, and startup ideas into content people actually watch — content that feels native, communicates fast, and actually performs.</p>
            <div className="pill-row">
              <span className="pill">Feels native (not like an ad)</span>
              <span className="pill">Communicates fast</span>
              <span className="pill">Actually performs</span>
              <span className="pill">Reaches Gen Z</span>
            </div>
            <a href="#contact" className="btn-p">Book a Call →</a>
            <a href="#pillars" className="btn-g">See My Content</a>
          </div>
          <div className="wd-right">
            <div className="mc">
              <div className="mc-icon">🤖</div>
              <div className="mc-title">AI & Tech Brands</div>
              <div className="mc-desc">I help you explain your product without sounding technical — and connect with Gen Z users before your competitors do.</div>
            </div>
            <div className="mc">
              <div className="mc-icon">🎓</div>
              <div className="mc-title">Career / EdTech / Startups</div>
              <div className="mc-desc">Reach students and early professionals through relatable content that builds trust and drives real action.</div>
            </div>
            <div className="mc">
              <div className="mc-icon">📲</div>
              <div className="mc-title">Consumer Apps</div>
              <div className="mc-desc">Turn features into stories. I make people stop scrolling and start downloading.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT PILLARS */}
      <section id="pillars">
        <div className="pillars-intro">
          <div className="eyebrow">Content Pillars</div>
          <h2 className="sec-title">I Can Help You<br/><em>With</em></h2>
          <p>Three core content buckets built around authentic storytelling that resonates with Gen Z and early professionals.</p>
        </div>
        <div className="pg">
          <div className="pc">
            <span className="pc-num">01</span>
            <div className="pc-type">Short Form UGC Videos</div>
            <div className="pc-name">AI & Tech, Explained Simply</div>
            <p className="pc-desc">Breaking down AI tools, trends, and concepts in a way Gen Z actually understands and shares.</p>
            <div className="pc-topics">
              <span className="pc-t">AI tools & use cases</span>
              <span className="pc-t">"What this actually means" content</span>
              <span className="pc-t">Simplifying technical ideas</span>
            </div>
          </div>
          <div className="pc">
            <span className="pc-num">02</span>
            <div className="pc-type">Short Form UGC Videos</div>
            <div className="pc-name">Career & Internship Reality</div>
            <p className="pc-desc">The things no one explains about networking, recruiting, and getting ahead — real, relatable, viral.</p>
            <div className="pc-topics">
              <span className="pc-t">How people actually get opportunities</span>
              <span className="pc-t">Breaking into competitive spaces</span>
              <span className="pc-t">LinkedIn + networking strategies</span>
            </div>
          </div>
          <div className="pc">
            <span className="pc-num">03</span>
            <div className="pc-type">Short Form UGC Videos</div>
            <div className="pc-name">Overthinking, Decoded</div>
            <p className="pc-desc">Relatable, viral-style content that puts words to what your audience is already thinking.</p>
            <div className="pc-topics">
              <span className="pc-t">"Why this works" content</span>
              <span className="pc-t">Social + career observations</span>
              <span className="pc-t">High-performing, shareable ideas</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="eyebrow">Services</div>
        <h2 className="sec-title" style={{maxWidth: '480px'}}>What Working With Me<br/><em>Looks Like</em></h2>
        <div className="sg">
          <div className="sc">
            <span className="sbadge">Short-Form Video</span>
            <div className="st">UGC Video Content</div>
            <p className="sd">Built for TikTok, Reels, and Shorts. Concept through final delivery.</p>
            <ul className="slist">
              <li>Concept + scripting</li>
              <li>Filming + editing</li>
              <li>Hooks, subtitles, CTAs</li>
              <li>Optimized for performance</li>
            </ul>
            <div className="sta">⚡ 4–6 day turnaround</div>
          </div>
          <div className="sc feat">
            <span className="mpop">Most Popular</span>
            <span className="sbadge">Ongoing Partnership</span>
            <div className="st">Monthly Retainer</div>
            <p className="sd">Consistent content designed to grow your brand over time — strategy, production, iteration.</p>
            <ul className="slist">
              <li>Ongoing content production</li>
              <li>Strategy + iteration</li>
              <li>Built for long-term performance</li>
              <li>Priority response time</li>
            </ul>
            <div className="sta">📩 Rates upon request</div>
          </div>
          <div className="sc">
            <span className="sbadge">UGC + Brand</span>
            <div className="st">Brand Content & Photos</div>
            <p className="sd">Content for your own channels or ads — native, non-ad feel, contract-backed.</p>
            <ul className="slist">
              <li>Product integration</li>
              <li>Storytelling-driven content</li>
              <li>Raw + edited photos</li>
              <li>Contract-backed process</li>
            </ul>
            <div className="sta">⚡ 2–3 days (photos)</div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow">
        <div className="wf-intro">
          <div className="eyebrow">Process</div>
          <h2 className="sec-title">Simple, Fast,<br/><em>Collaborative.</em></h2>
          <p>From first call to final delivery — here's exactly how we work together.</p>
        </div>
        <div className="wf-row">
          <div className="ws">
            <div className="ws-n">01</div>
            <div className="ws-title">Strategy Call</div>
            <div className="ws-desc">15-min free call — align on goals, ideas, and logistics</div>
          </div>
          <div className="ws">
            <div className="ws-n">02</div>
            <div className="ws-title">Concept & Script</div>
            <div className="ws-desc">Content ideas + scripts sent for brand approval before filming</div>
          </div>
          <div className="ws">
            <div className="ws-n">03</div>
            <div className="ws-title">Draft Delivery</div>
            <div className="ws-desc">First version delivered for your review and feedback</div>
          </div>
          <div className="ws">
            <div className="ws-n">04</div>
            <div className="ws-title">Edits</div>
            <div className="ws-desc">Text, subtitles, CTAs — refined until it's right</div>
          </div>
          <div className="ws">
            <div className="ws-n">05</div>
            <div className="ws-title">Delivery + Analytics</div>
            <div className="ws-desc">Final content + follow-up email on video performance data</div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <div className="eyebrow">Social Proof</div>
        <h2 className="sec-title">What Brands <em>Say</em></h2>
        <div className="tg">
          <div className="tc">
            <span className="qm">"</span>
            <p className="tt">Always fast turnaround and quick to reply, making the process so fast to deliver final versions. Talia's efficiency and communication made our collaboration seamless.</p>
            <div className="ta">Medici.ac</div>
            <div className="tco">Brand Partner</div>
          </div>
          <div className="tc">
            <span className="qm">"</span>
            <p className="tt">Very organized, made sure a contract was in place so both parties were transparent and accountable. Professional approach that made us feel confident throughout the entire process.</p>
            <div className="ta">Plaud</div>
            <div className="tco">Brand Partner</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="eyebrow">Get In Touch</div>
        <h2 className="sec-title">Let's Make Content<br/>People Actually <em>Watch.</em></h2>
        <p className="csub">If you're building something and want Gen Z to understand it — I can help.</p>
        <a href="mailto:kusmire@bc.edu" className="cemail">✉ kusmire@bc.edu</a>
        <div className="cbtns">
          <a href="mailto:kusmire@bc.edu" className="btn-p">Book a Call →</a>
          <a href="mailto:kusmire@bc.edu" className="btn-g">Email Me</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          <a href="#" className="flogo">Talia Kusmirek</a>
          <p className="ftag">Creating authentic UGC content that connects with audiences and drives real results for AI, tech, and startup brands.</p>
          <a href="mailto:kusmire@bc.edu" className="femail">kusmire@bc.edu</a>
        </div>
        <div>
          <div className="fct">Quick Links</div>
          <ul className="fl">
            <li><a href="#">Home</a></li>
            <li><a href="#pillars">Content</a></li>
            <li><a href="#workflow">Process</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="fct">Connect</div>
          <ul className="fl">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">TikTok</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="mailto:kusmire@bc.edu">kusmire@bc.edu</a></li>
          </ul>
        </div>
      </footer>
      <div className="fbot">
        <p>© 2025 Talia Kusmirek. All rights reserved.</p>
        <p>Boston, MA · Available for brand partnerships</p>
      </div>
    </>
  );
}
