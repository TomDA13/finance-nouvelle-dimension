
import React, { useState } from 'react';

const DashboardTabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="dashboard-tabs">
      <div className="tabs-nav">
        <button 
          className={`tab-button ${activeTab === 'tab1' ? 'active' : ''}`} 
          onClick={() => handleTabClick('tab1')}
        >
          Vue d'ensemble
        </button>
        <button 
          className={`tab-button ${activeTab === 'tab2' ? 'active' : ''}`} 
          onClick={() => handleTabClick('tab2')}
        >
          Mes projets
        </button>
        <button 
          className={`tab-button ${activeTab === 'tab3' ? 'active' : ''}`} 
          onClick={() => handleTabClick('tab3')}
        >
          Mon immobilier
        </button>
        <button 
          className={`tab-button ${activeTab === 'tab4' ? 'active' : ''}`} 
          onClick={() => handleTabClick('tab4')}
        >
          Mes actions/ETF
        </button>
      </div>
      
      <div className="tabs-content">
        <div className={`tab-pane ${activeTab === 'tab1' ? 'active' : ''}`} id="tab1">
          <img 
            src="lovable-uploads/4724d52e-945f-41c5-96dd-91f10ab50ae3.png" 
            alt="Vue d'ensemble du tableau de bord" 
            className="dashboard-preview-image rounded-lg" 
          />
        </div>
        
        <div className={`tab-pane ${activeTab === 'tab2' ? 'active' : ''}`} id="tab2">
          <img 
            src="lovable-uploads/2a6a5a86-b14d-4933-a2a9-d0e1d5bcdcb1.png" 
            alt="Liste des projets financiers" 
            className="dashboard-preview-image rounded-lg" 
          />
        </div>
        
        <div className={`tab-pane ${activeTab === 'tab3' ? 'active' : ''}`} id="tab3">
          <img 
            src="lovable-uploads/a0c21298-b6d2-4958-9ab5-06fe3ff334b4.png" 
            alt="Patrimoine Immobilier" 
            className="dashboard-preview-image rounded-lg" 
          />
        </div>
        
        <div className={`tab-pane ${activeTab === 'tab4' ? 'active' : ''}`} id="tab4">
          <img 
            src="lovable-uploads/abd70d81-3502-4bb0-b356-4f5ac235df84.png" 
            alt="Portefeuille d'Actions et ETF" 
            className="dashboard-preview-image rounded-lg" 
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardTabs;
