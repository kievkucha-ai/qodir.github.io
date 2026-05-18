/* Reusable icon set + Uzbek ornament SVGs */

const Star8 = ({ stroke = 'currentColor', fill = 'none', sw = 1 }) => (
  <svg viewBox="0 0 56 56" fill={fill} stroke={stroke} strokeWidth={sw}>
    <path d="M28 4 L34 22 L52 28 L34 34 L28 52 L22 34 L4 28 L22 22 Z" />
    <path d="M28 12 L31 24 L43 28 L31 32 L28 44 L25 32 L13 28 L25 24 Z" />
    <circle cx="28" cy="28" r="2.2" fill={stroke} />
  </svg>
);

const ArchFrame = ({ stroke = '#C9A961', sw = 1.4 }) => (
  <svg viewBox="0 0 400 530" fill="none" stroke={stroke} strokeWidth={sw}>
    <path d="M 8 220 Q 8 8 200 8 Q 392 8 392 220 L 392 522 L 8 522 Z" />
    <path d="M 22 222 Q 22 22 200 22 Q 378 22 378 222 L 378 508 L 22 508 Z" opacity="0.5" />
    <g opacity="0.45">
      <path d="M 200 38 L 206 56 L 224 62 L 206 68 L 200 86 L 194 68 L 176 62 L 194 56 Z" />
      <circle cx="200" cy="62" r="2" fill={stroke} />
    </g>
  </svg>
);

const OrnamentColumn = ({ stroke = '#C9A961' }) => (
  <svg viewBox="0 0 120 600" fill="none" stroke={stroke} strokeWidth="0.8" preserveAspectRatio="none">
    <g opacity="0.7">
      {Array.from({ length: 12 }).map((_, i) => (
        <g key={i} transform={`translate(60, ${30 + i * 50})`}>
          <path d="M 0 -16 L 6 -6 L 16 0 L 6 6 L 0 16 L -6 6 L -16 0 L -6 -6 Z" />
          <circle cx="0" cy="0" r="2" fill={stroke} />
        </g>
      ))}
      <line x1="60" y1="0" x2="60" y2="600" />
      <line x1="50" y1="0" x2="50" y2="600" opacity="0.4" />
      <line x1="70" y1="0" x2="70" y2="600" opacity="0.4" />
    </g>
  </svg>
);

const LogoMark = ({ color = '#0A3223', accent = '#C9A961' }) => (
  // Stylized camel under an arch — inspired by the brand logo silhouette.
  <svg viewBox="0 0 100 100" fill="none">
    {/* Arch */}
    <path d="M 14 92 L 14 50 Q 14 14 50 14 Q 86 14 86 50 L 86 92"
      stroke={color} strokeWidth="3.5" fill="none" strokeLinejoin="round" />
    <path d="M 22 92 L 22 50 Q 22 22 50 22 Q 78 22 78 50 L 78 92"
      stroke={color} strokeWidth="1.2" fill="none" opacity="0.55" />
    {/* Star at the apex */}
    <g transform="translate(50, 22)">
      <path d="M 0 -7 L 2 -2 L 7 0 L 2 2 L 0 7 L -2 2 L -7 0 L -2 -2 Z"
        fill={accent} stroke={color} strokeWidth="0.6" />
    </g>
    {/* Camel silhouette (abstract) */}
    <g transform="translate(50, 68)" fill={color}>
      <path d="M -22 14
               L -22 8
               L -20 4
               L -18 6
               L -16 4
               L -14 2
               L -12 -2
               L -10 -8
               L -8 -10
               L -4 -10
               L -2 -6
               L 2 -2
               L 6 -6
               L 8 -12
               L 12 -14
               L 14 -10
               L 14 -4
               L 16 -2
               L 18 4
               L 20 6
               L 20 12
               L 18 14
               L 16 14
               L 14 8
               L 8 8
               L 6 14
               L 4 14
               L 2 8
               L -8 8
               L -10 14
               L -12 14
               L -14 8
               L -18 8
               L -18 14
               Z" />
    </g>
    {/* Ground */}
    <path d="M 16 86 Q 50 80 84 86" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
  </svg>
);

const Medallion = () => (
  <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1">
    <circle cx="100" cy="100" r="92" />
    <circle cx="100" cy="100" r="78" opacity="0.6" />
    <circle cx="100" cy="100" r="62" opacity="0.5" />
    <g>
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={i} transform={`rotate(${i * 45} 100 100)`}>
          <path d="M 100 22 L 105 46 L 120 50 L 105 54 L 100 78 L 95 54 L 80 50 L 95 46 Z" />
          <circle cx="100" cy="50" r="2" fill="currentColor" />
        </g>
      ))}
    </g>
    <g opacity="0.7">
      <path d="M 100 38 L 108 100 L 100 162 L 92 100 Z" />
      <path d="M 38 100 L 100 92 L 162 100 L 100 108 Z" />
    </g>
    <circle cx="100" cy="100" r="14" fill="currentColor" />
    <circle cx="100" cy="100" r="6" fill="#0A3223" />
  </svg>
);

/* Small product silhouettes — abstract geometric forms */
const ProdShape = ({ shape, color }) => {
  if (shape === 'cluster') {
    return (
      <svg viewBox="0 0 100 100">
        <g fill={color}>
          <circle cx="38" cy="38" r="14" />
          <circle cx="58" cy="40" r="13" />
          <circle cx="46" cy="58" r="14" />
          <circle cx="66" cy="60" r="12" />
          <circle cx="32" cy="60" r="11" />
          <circle cx="54" cy="74" r="11" />
        </g>
        <path d="M 50 8 L 52 22" stroke="#3a2010" strokeWidth="2" fill="none" />
      </svg>
    );
  }
  if (shape === 'long') {
    return (
      <svg viewBox="0 0 100 100">
        <ellipse cx="50" cy="60" rx="14" ry="38" fill={color} transform="rotate(-12 50 60)" />
        <path d="M 38 22 Q 50 14 62 22" stroke="#3F6B2A" strokeWidth="3" fill="none" />
      </svg>
    );
  }
  if (shape === 'bell') {
    return (
      <svg viewBox="0 0 100 100">
        <path d="M 30 30 Q 30 78 50 84 Q 70 78 70 30 Q 60 26 50 30 Q 40 26 30 30 Z" fill={color} />
        <path d="M 48 22 Q 50 16 56 18 L 54 28" stroke="#3F6B2A" strokeWidth="3" fill="none" />
      </svg>
    );
  }
  if (shape === 'oval') {
    return (
      <svg viewBox="0 0 100 100">
        <ellipse cx="50" cy="52" rx="38" ry="28" fill={color} />
        <path d="M 18 52 Q 50 36 82 52" stroke="rgba(0,0,0,0.18)" strokeWidth="1" fill="none" />
        <path d="M 18 52 Q 50 70 82 52" stroke="rgba(0,0,0,0.18)" strokeWidth="1" fill="none" />
      </svg>
    );
  }
  if (shape === 'grain') {
    return (
      <svg viewBox="0 0 100 100">
        <g fill={color}>
          {[[28,38],[44,32],[58,40],[36,52],[52,52],[68,50],[44,64],[60,66],[30,68],[52,76]].map(([x,y],i) => (
            <ellipse key={i} cx={x} cy={y} rx="7" ry="5" transform={`rotate(${i*23} ${x} ${y})`} />
          ))}
        </g>
      </svg>
    );
  }
  if (shape === 'nut') {
    return (
      <svg viewBox="0 0 100 100">
        <ellipse cx="50" cy="50" rx="26" ry="32" fill={color} />
        <path d="M 50 18 Q 36 50 50 82" stroke="rgba(0,0,0,0.18)" strokeWidth="1.5" fill="none" />
        <path d="M 50 18 Q 64 50 50 82" stroke="rgba(0,0,0,0.18)" strokeWidth="1.5" fill="none" />
      </svg>
    );
  }
  // sphere default
  return (
    <svg viewBox="0 0 100 100">
      <defs>
        <radialGradient id={`g-${color}`} cx="38%" cy="35%">
          <stop offset="0%" stopColor="white" stopOpacity="0.35" />
          <stop offset="60%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="1" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="52" r="32" fill={`url(#g-${color})`} />
      <path d="M 50 20 Q 54 16 58 20" stroke="#3F6B2A" strokeWidth="2.5" fill="none" />
    </svg>
  );
};

/* Icon helpers */
const Icon = {
  Arrow: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7"/>
    </svg>
  ),
  Cart: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/>
      <path d="M3 4h2l2.6 11.4a1.6 1.6 0 0 0 1.6 1.2h7.4a1.6 1.6 0 0 0 1.6-1.2L21 8H6"/>
    </svg>
  ),
  Search: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>
    </svg>
  ),
  Heart: ({ filled }) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={filled?'currentColor':'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1 7.8 7.8 7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"/>
    </svg>
  ),
  Leaf: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 4 13c0-2.5.7-7.6 7-9 5 1 8 5 8 9a7 7 0 0 1-8 7Z"/>
      <path d="M11 20s-2-4 0-8 7-5 7-5"/>
    </svg>
  ),
  Truck: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h11v10H3zM14 9h4l3 3v4h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17.5" cy="18" r="1.6"/>
    </svg>
  ),
  Shield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6z"/><path d="m9 12 2 2 4-4"/>
    </svg>
  ),
  Globe: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>
    </svg>
  ),
  Phyto: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M8 8h8M8 12h8M8 16h6"/>
    </svg>
  ),
  Container: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="18" height="12"/><path d="M7 6v12M11 6v12M15 6v12"/>
    </svg>
  ),
  Sun: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"/>
    </svg>
  ),
  Check: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.5 10 17 20 7"/>
    </svg>
  ),
  Close: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 6l12 12M18 6 6 18"/>
    </svg>
  ),
};

Object.assign(window, { Star8, ArchFrame, OrnamentColumn, LogoMark, Medallion, ProdShape, Icon });
