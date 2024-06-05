import React, { useState } from 'react';

const Tabs = ({tabs}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='mak-tabs'>
      <div className="tabs tabs-boxed mb-5">
        {tabs.length && tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${index === activeTab ? 'tab-active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mak-tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
