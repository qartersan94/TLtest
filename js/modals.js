// Modals & Popups Manager - TravL E-sports
// Gestion des fenêtres modales et popups

class ModalsManager {
  constructor() {
    this.activeModal = null;
  }

  // Modal de base
  createModal(content, className = '') {
    const modal = document.createElement('div');
    modal.className = `modal-overlay ${className}`;
    modal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close" onclick="this.parentElement.parentElement.remove()">×</button>
        ${content}
      </div>
    `;
    
    // Fermer avec Escape
    modal.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modal.remove();
      }
    });
    
    // Fermer en cliquant sur l'overlay
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
    
    document.body.appendChild(modal);
    this.activeModal = modal;
    return modal;
  }

  // Modal Profil Joueur
  showPlayerProfile(playerId) {
    const player = getPlayerById(playerId);
    if (!player) return;
    
    const team = getTeamById(player.team);
    const coach = getCoachById(team.coach);
    const manager = getManagerById(team.manager);

    const content = `
      <div class="player-profile-modal">
        <div class="profile-header">
          <div class="profile-avatar">${player.pseudo.substring(0, 2).toUpperCase()}</div>
          <div class="profile-info">
            <h2>${player.pseudo}</h2>
            <p class="profile-realname">${player.realName}</p>
            <div class="profile-badges">
              <span class="badge badge-${this.getPositionBadgeClass(player.position)}">${player.position}</span>
              ${player.isCaptain ? '<span class="badge badge-warning">Capitaine</span>' : ''}
              <span class="badge badge-info">${team.name}</span>
            </div>
          </div>
        </div>
        
        <div class="profile-stats-grid">
          <div class="profile-stat">
            <div class="stat-label">KDA</div>
            <div class="stat-value">${player.kda}</div>
          </div>
          <div class="profile-stat">
            <div class="stat-label">Winrate</div>
            <div class="stat-value">${player.winrate}%</div>
          </div>
          <div class="profile-stat">
            <div class="stat-label">Matchs</div>
            <div class="stat-value">${player.gamesPlayed}</div>
          </div>
          <div class="profile-stat">
            <div class="stat-label">Âge</div>
            <div class="stat-value">${player.age} ans</div>
          </div>
        </div>

        <div class="profile-section">
          <h3>Informations</h3>
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">Nom Réel</span>
              <span class="info-value">${player.realName}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Nationalité</span>
              <span class="info-value">${player.nationality}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Salaire</span>
              <span class="info-value">${player.salary}€/mois</span>
            </div>
            <div class="info-item">
              <span class="info-label">Fin de Contrat</span>
              <span class="info-value">${this.formatDate(player.contractEnd)}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Champions</span>
              <span class="info-value">${player.champions.join(', ')}</span>
            </div>
          </div>
        </div>

        <div class="profile-section">
          <h3>Staff Associé</h3>
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">Coach</span>
              <span class="info-value">${coach ? coach.name : 'N/A'}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Manager</span>
              <span class="info-value">${manager ? manager.name : 'N/A'}</span>
            </div>
          </div>
        </div>
      </div>
    `;

    this.createModal(content, 'profile-modal');
  }

  // Modal Détails Équipe
  showTeamDetails(teamId) {
    const team = getTeamById(teamId);
    if (!team) return;
    
    const players = getPlayersByTeam(teamId);
    const coach = getCoachById(team.coach);
    const manager = getManagerById(team.manager);
    const captain = getCaptainByTeam(teamId);

    const content = `
      <div class="team-details-modal">
        <div class="team-header-modal">
          <div class="team-icon-large">${team.icon}</div>
          <div>
            <h2>${team.name}</h2>
            <p class="team-division">${team.division}</p>
          </div>
        </div>

        <div class="stats-overview">
          <div class="stat-box">
            <div class="stat-label">Victoires</div>
            <div class="stat-value">${team.wins}</div>
          </div>
          <div class="stat-box">
            <div class="stat-label">Défaites</div>
            <div class="stat-value">${team.losses}</div>
          </div>
          <div class="stat-box">
            <div class="stat-label">Winrate</div>
            <div class="stat-value">${team.winrate}%</div>
          </div>
        </div>

        <div class="team-roster-section">
          <h3>Roster</h3>
          <div class="roster-list">
            ${players.map(p => `
              <div class="roster-item">
                <div class="player-info-inline">
                  <strong>${p.pseudo}</strong>
                  <span class="badge badge-${this.getPositionBadgeClass(p.position)}">${p.position}</span>
                  ${p.isCaptain ? '<span class="badge badge-warning">C</span>' : ''}
                </div>
                <div class="player-stats-inline">
                  <span>KDA: ${p.kda}</span>
                  <span>WR: ${p.winrate}%</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="team-staff-section">
          <h3>Staff</h3>
          <div class="staff-list">
            <div class="staff-item">
              <span class="info-label">Coach</span>
              <span class="info-value">${coach ? coach.name : 'N/A'}</span>
            </div>
            <div class="staff-item">
              <span class="info-label">Manager</span>
              <span class="info-value">${manager ? manager.name : 'N/A'}</span>
            </div>
            <div class="staff-item">
              <span class="info-label">Capitaine</span>
              <span class="info-value">${captain ? captain.pseudo : 'N/A'}</span>
            </div>
          </div>
        </div>
      </div>
    `;

    this.createModal(content, 'team-modal');
  }

  // Modal Confirmation
  showConfirmation(message, onConfirm) {
    const content = `
      <div class="confirmation-modal">
        <h3>⚠️ Confirmation</h3>
        <p>${message}</p>
        <div class="modal-actions">
          <button class="btn btn-secondary" onclick="this.closest('.modal-overlay').remove()">Annuler</button>
          <button class="btn btn-primary" id="confirm-btn">Confirmer</button>
        </div>
      </div>
    `;

    const modal = this.createModal(content);
    document.getElementById('confirm-btn').addEventListener('click', () => {
      onConfirm();
      modal.remove();
    });
  }

  // Modal Succès
  showSuccess(message) {
    const content = `
      <div class="success-modal">
        <div class="success-icon">✓</div>
        <h3>Succès !</h3>
        <p>${message}</p>
        <button class="btn btn-primary" onclick="this.closest('.modal-overlay').remove()">OK</button>
      </div>
    `;

    this.createModal(content);
  }

  // Modal Erreur
  showError(message) {
    const content = `
      <div class="error-modal">
        <div class="error-icon">✗</div>
        <h3>Erreur</h3>
        <p>${message}</p>
        <button class="btn btn-primary" onclick="this.closest('.modal-overlay').remove()">OK</button>
      </div>
    `;

    this.createModal(content);
  }

  // Utilitaires
  formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  getPositionBadgeClass(position) {
    const map = {
      'TOP': 'info',
      'JGL': 'success',
      'MID': 'warning',
      'ADC': 'danger',
      'SUP': 'info'
    };
    return map[position] || 'info';
  }

  // Fermer toutes les modales
  closeAll() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.remove());
  }
}

// Export
if (typeof window !== 'undefined') {
  window.ModalsManager = ModalsManager;
  window.modals = new ModalsManager();
}
