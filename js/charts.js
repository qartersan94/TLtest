// Charts & Analytics - TravL E-sports
// Gestion des graphiques et visualisations

class ChartsManager {
  constructor() {
    this.colors = {
      red: '#D31027',
      deepRed: '#8B0000',
      gold: '#FFD700',
      blue: '#3b82f6',
      success: '#10b981',
      gray: '#9BA3B4'
    };
  }

  // Graphique Performance des Équipes
  renderTeamPerformanceChart() {
    const canvas = document.getElementById('team-performance-chart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const teams = DATABASE.teams.slice(0, 8);
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Setup
    const barWidth = 80;
    const barSpacing = 20;
    const maxHeight = 200;
    const startX = 50;
    const startY = 250;
    
    // Draw axes
    ctx.strokeStyle = this.colors.gray;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(canvas.width - 20, startY);
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX, 30);
    ctx.stroke();
    
    // Draw bars
    teams.forEach((team, index) => {
      const x = startX + (barWidth + barSpacing) * index;
      const winHeight = (team.wins / 30) * maxHeight;
      const lossHeight = (team.losses / 30) * maxHeight;
      
      // Wins (red)
      ctx.fillStyle = this.colors.red;
      ctx.fillRect(x, startY - winHeight, barWidth / 2 - 5, winHeight);
      
      // Losses (gray)
      ctx.fillStyle = this.colors.gray;
      ctx.fillRect(x + barWidth / 2, startY - lossHeight, barWidth / 2 - 5, lossHeight);
      
      // Team label
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '12px Rajdhani';
      ctx.textAlign = 'center';
      ctx.fillText(team.icon, x + barWidth / 2, startY + 20);
      
      // Win count
      ctx.fillStyle = this.colors.red;
      ctx.font = 'bold 14px Rajdhani';
      ctx.fillText(team.wins, x + barWidth / 4, startY - winHeight - 5);
      
      // Loss count
      ctx.fillStyle = this.colors.gray;
      ctx.fillText(team.losses, x + (barWidth * 3) / 4, startY - lossHeight - 5);
    });
    
    // Legend
    ctx.fillStyle = this.colors.red;
    ctx.fillRect(canvas.width - 150, 20, 20, 20);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '14px Rajdhani';
    ctx.textAlign = 'left';
    ctx.fillText('Victoires', canvas.width - 120, 35);
    
    ctx.fillStyle = this.colors.gray;
    ctx.fillRect(canvas.width - 150, 50, 20, 20);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('Défaites', canvas.width - 120, 65);
  }

  // Graphique Évolution Winrate
  renderWinrateChart() {
    const canvas = document.getElementById('winrate-chart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Données simulées d'évolution du winrate
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'];
    const winrates = [55, 58, 56, 60, 59, 58];
    
    const startX = 50;
    const startY = 250;
    const width = canvas.width - 100;
    const height = 200;
    const stepX = width / (months.length - 1);
    
    // Draw axes
    ctx.strokeStyle = this.colors.gray;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(canvas.width - 20, startY);
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX, 30);
    ctx.stroke();
    
    // Draw grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
      const y = startY - (height / 5) * i;
      ctx.beginPath();
      ctx.moveTo(startX, y);
      ctx.lineTo(canvas.width - 20, y);
      ctx.stroke();
      
      // Y-axis labels
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '12px Rajdhani';
      ctx.textAlign = 'right';
      ctx.fillText((40 + i * 10) + '%', startX - 10, y + 5);
    }
    
    // Draw line
    ctx.strokeStyle = this.colors.red;
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    winrates.forEach((rate, index) => {
      const x = startX + stepX * index;
      const y = startY - ((rate - 40) / 20) * height;
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    
    ctx.stroke();
    
    // Draw points
    winrates.forEach((rate, index) => {
      const x = startX + stepX * index;
      const y = startY - ((rate - 40) / 20) * height;
      
      // Point
      ctx.fillStyle = this.colors.red;
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fill();
      
      // White border
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Month label
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '12px Rajdhani';
      ctx.textAlign = 'center';
      ctx.fillText(months[index], x, startY + 20);
      
      // Value label
      ctx.fillStyle = this.colors.red;
      ctx.font = 'bold 14px Rajdhani';
      ctx.fillText(rate + '%', x, y - 15);
    });
  }

  // Graphique Budget (Pie chart simple)
  renderBudgetChart() {
    const canvas = document.getElementById('budget-chart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 100;
    
    const data = [
      { label: 'Salaires', value: 1200000, color: '#D31027' },
      { label: 'Staff', value: 380000, color: '#8B0000' },
      { label: 'Infrastructure', value: 250000, color: '#3b82f6' },
      { label: 'Marketing', value: 200000, color: '#FFD700' },
      { label: 'Événements', value: 180000, color: '#10b981' },
      { label: 'Équipement', value: 190000, color: '#9BA3B4' }
    ];
    
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let currentAngle = -Math.PI / 2;
    
    // Draw pie slices
    data.forEach((item, index) => {
      const sliceAngle = (item.value / total) * 2 * Math.PI;
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
      ctx.closePath();
      ctx.fillStyle = item.color;
      ctx.fill();
      
      // White border
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      currentAngle += sliceAngle;
    });
    
    // Legend
    data.forEach((item, index) => {
      const y = 30 + index * 30;
      
      // Color box
      ctx.fillStyle = item.color;
      ctx.fillRect(canvas.width - 200, y, 20, 20);
      
      // Label
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '14px Rajdhani';
      ctx.textAlign = 'left';
      ctx.fillText(item.label, canvas.width - 170, y + 15);
      
      // Value
      ctx.fillStyle = this.colors.gray;
      ctx.fillText((item.value / 1000) + 'K€', canvas.width - 70, y + 15);
    });
  }

  // Initialiser tous les graphiques
  initializeAllCharts() {
    this.renderTeamPerformanceChart();
    this.renderWinrateChart();
    this.renderBudgetChart();
  }
}

// Export pour utilisation globale
if (typeof window !== 'undefined') {
  window.ChartsManager = ChartsManager;
}
