export default function BloomingFlower() {
  return (
    <div className="flex justify-center my-6">
      <svg width="170" height="220" viewBox="0 0 170 220" fill="none" xmlns="http://www.w3.org/2000/svg">

        {/* ── Stems ── */}
        <line x1="85" y1="128" x2="85" y2="52" stroke="#5a7a3a" strokeWidth="2" strokeLinecap="round"/>
        <line x1="78" y1="127" x2="60" y2="48" stroke="#5a7a3a" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="92" y1="127" x2="110" y2="46" stroke="#5a7a3a" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="70" y1="126" x2="44" y2="62" stroke="#5a7a3a" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="100" y1="126" x2="128" y2="60" stroke="#5a7a3a" strokeWidth="1.5" strokeLinecap="round"/>

        {/* ── Eucalyptus left ── */}
        <path d="M 68 122 Q 46 96 34 72" stroke="#6b8f4e" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <ellipse cx="57" cy="106" rx="8" ry="4.5" fill="#8aaa62" stroke="#5a7840" strokeWidth="0.5" transform="rotate(-35 57 106)"/>
        <ellipse cx="44" cy="89" rx="8" ry="4.5" fill="#7aa058" stroke="#5a7840" strokeWidth="0.5" transform="rotate(-48 44 89)"/>
        <ellipse cx="35" cy="74" rx="7" ry="4" fill="#8aaa62" stroke="#5a7840" strokeWidth="0.5" transform="rotate(-58 35 74)"/>

        {/* ── Eucalyptus right ── */}
        <path d="M 102 122 Q 124 96 136 74" stroke="#6b8f4e" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <ellipse cx="113" cy="106" rx="8" ry="4.5" fill="#8aaa62" stroke="#5a7840" strokeWidth="0.5" transform="rotate(35 113 106)"/>
        <ellipse cx="126" cy="89" rx="8" ry="4.5" fill="#7aa058" stroke="#5a7840" strokeWidth="0.5" transform="rotate(48 126 89)"/>
        <ellipse cx="135" cy="76" rx="7" ry="4" fill="#8aaa62" stroke="#5a7840" strokeWidth="0.5" transform="rotate(58 135 76)"/>

        {/* ── Far-left small wildflower ── */}
        <g transform="translate(43, 65)">
          {[0,60,120,180,240,300].map(a => (
            <ellipse key={a} cx="0" cy="-9" rx="5" ry="8" fill="#f5e8d5" stroke="#d8c0a0" strokeWidth="0.5" transform={`rotate(${a})`}/>
          ))}
          <circle cx="0" cy="0" r="4" fill="#f0c050" stroke="#c89820" strokeWidth="0.5"/>
        </g>

        {/* ── Far-right small dusty-blue flower ── */}
        <g transform="translate(128, 62)">
          {[0,72,144,216,288].map(a => (
            <ellipse key={a} cx="0" cy="-10" rx="6" ry="10" fill="#c8d8e8" stroke="#9ab0cc" strokeWidth="0.5" transform={`rotate(${a})`}/>
          ))}
          <circle cx="0" cy="0" r="4.5" fill="#f0f0e0" stroke="#c8c8b0" strokeWidth="0.5"/>
          {[0,60,120,180,240,300].map((a,i) => {
            const r = a * Math.PI / 180
            return <circle key={i} cx={Math.cos(r)*2.5} cy={Math.sin(r)*2.5} r="0.7" fill="#888870"/>
          })}
        </g>

        {/* ── Left flower – cream anemone ── */}
        <g transform="translate(59, 52)">
          {[0,72,144,216,288].map(a => (
            <ellipse key={a} cx="0" cy="-15" rx="10" ry="14" fill="#f8f0e5" stroke="#d8c8b0" strokeWidth="0.6" transform={`rotate(${a})`}/>
          ))}
          <circle cx="0" cy="0" r="7" fill="#1e1018" stroke="#0e080e" strokeWidth="0.5"/>
          {[0,51,102,153,204,255,306].map((a,i) => {
            const r = a * Math.PI / 180
            return <circle key={i} cx={Math.cos(r)*4} cy={Math.sin(r)*4} r="0.9" fill="#f5ead8"/>
          })}
        </g>

        {/* ── Right flower – dusty rose ranunculus ── */}
        <g transform="translate(110, 50)">
          {[22,67,112,157,202,247,292,337].map(a => (
            <ellipse key={a} cx="0" cy="-17" rx="10" ry="15" fill="#ddb5c5" stroke="#b88aaa" strokeWidth="0.7" transform={`rotate(${a})`}/>
          ))}
          {[0,60,120,180,240,300].map(a => (
            <ellipse key={a} cx="0" cy="-10" rx="7" ry="10" fill="#cc98b0" stroke="#a87098" strokeWidth="0.5" transform={`rotate(${a})`}/>
          ))}
          <circle cx="0" cy="0" r="6" fill="#f5d8c0" stroke="#d8a898" strokeWidth="0.8"/>
          <circle cx="0" cy="0" r="3" fill="#e8b898"/>
        </g>

        {/* ── Center flower – blush ranunculus (largest) ── */}
        <g transform="translate(85, 50)">
          {[0,45,90,135,180,225,270,315].map(a => (
            <ellipse key={a} cx="0" cy="-22" rx="12" ry="19" fill="#f0bfb0" stroke="#d89888" strokeWidth="0.8" transform={`rotate(${a})`}/>
          ))}
          {[22,67,112,157,202,247,292,337].map(a => (
            <ellipse key={a} cx="0" cy="-14" rx="8" ry="12" fill="#e8a898" stroke="#c87870" strokeWidth="0.6" transform={`rotate(${a})`}/>
          ))}
          {[0,60,120,180,240,300].map(a => (
            <ellipse key={a} cx="0" cy="-8" rx="5" ry="7" fill="#da9080" stroke="#b86860" strokeWidth="0.4" transform={`rotate(${a})`}/>
          ))}
          <circle cx="0" cy="0" r="7" fill="#f5d060" stroke="#c8a030" strokeWidth="0.8"/>
          <circle cx="0" cy="0" r="3.5" fill="#e8b820"/>
          {[0,51,102,153,204,255,306].map((a,i) => {
            const r = a * Math.PI / 180
            return <circle key={i} cx={Math.cos(r)*5} cy={Math.sin(r)*5} r="0.8" fill="#c09010"/>
          })}
        </g>

        {/* ── Kraft paper wrap ── */}
        <polygon points="44,120 126,120 142,202 28,202" fill="#c4844a"/>
        {/* Paper top fold showing inside */}
        <polygon points="44,120 126,120 120,133 50,133" fill="#e8b880"/>
        {/* Crease lines */}
        <line x1="85" y1="120" x2="85" y2="202" stroke="#a06530" strokeWidth="0.5" strokeOpacity="0.35"/>
        <line x1="57" y1="122" x2="38" y2="202" stroke="#a06530" strokeWidth="0.4" strokeOpacity="0.25"/>
        <line x1="113" y1="122" x2="132" y2="202" stroke="#a06530" strokeWidth="0.4" strokeOpacity="0.25"/>
        {/* Bottom edge shadow */}
        <line x1="28" y1="200" x2="142" y2="200" stroke="#8a5020" strokeWidth="1.5" strokeOpacity="0.4"/>

        {/* ── Twine ── */}
        <path d="M 50 135 Q 85 128 120 135" stroke="#8b7040" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M 50 139 Q 85 132 120 139" stroke="#8b7040" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeOpacity="0.6"/>
        {/* Bow knot */}
        <ellipse cx="85" cy="134" rx="5" ry="3" fill="#7a6030"/>
        {/* Bow loops */}
        <path d="M 85 132 Q 73 122 68 128 Q 70 134 80 133" fill="#8b7040" strokeWidth="0" opacity="0.85"/>
        <path d="M 85 132 Q 97 122 102 128 Q 100 134 90 133" fill="#8b7040" strokeWidth="0" opacity="0.85"/>
        {/* Bow tails */}
        <path d="M 82 135 Q 76 142 72 140" stroke="#7a6030" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M 88 135 Q 94 142 98 140" stroke="#7a6030" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

      </svg>
    </div>
  )
}
