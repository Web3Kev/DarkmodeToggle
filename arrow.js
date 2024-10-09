function updateArrow() {
    const start = document.getElementById('start').getBoundingClientRect();
    const end = document.getElementById('end').getBoundingClientRect();

    const x1 = (start.left + start.width / 2);
    const y1 = (start.top + start.height / 2)-30;
    const x2 = (end.left + end.width / 2)-40;
    const y2 = (end.top + end.height / 2);

     // Calculate control points for a double-bend wavy path (using a cubic Bézier curve)
     const midX = (x1 + x2) / 2;
     const midY = (y1 + y2) / 2;
     const waveAmplitude = 50;  // Adjust for how wiggly the arrow should be

     // Control points for the cubic Bézier curve
     const cp1x = midX + waveAmplitude;
     const cp1y = y1 - waveAmplitude;
     const cp2x = midX - waveAmplitude;
     const cp2y = y2 + waveAmplitude;

     // Create a double-bend wavy path
     const path = `M ${x1},${y1} C ${cp1x},${cp1y}, ${cp2x},${cp2y}, ${x2},${y2}`;
     const arrow = document.getElementById('arrow');
     arrow.setAttribute('d', path);
}

// Initial call
updateArrow();

// Update on window resize
window.addEventListener('resize', updateArrow);