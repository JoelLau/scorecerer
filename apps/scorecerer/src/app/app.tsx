import React from 'react';

export const App = () => {
  return (
    <>
      <form id="form">
        <div className="popularity">
          <label htmlFor="popularity">Popularity</label>
          <input
            type="number"
            name="popularity"
            id="popularity"
            placeholder="Popularity"
            min="0"
            max="18"
            value="0"
          />
        </div>
        <div className="stars">
          <label htmlFor="stars">Star Tokens Placed</label>
          <input
            type="number"
            name="stars"
            id="stars"
            placeholder="Star Tokens Placed"
            min="0"
            max="6"
            value="0"
          />
        </div>
        <div className="territories">
          <label htmlFor="territories">Territories Controlled</label>
          <input
            type="number"
            name="territories"
            id="star-tokens"
            placeholder="Territories Controlled"
            min="0"
            value="0"
          />
        </div>
        <div className="resources">
          <label htmlFor="resources">Resources Controlled</label>
          <input
            type="number"
            name="resources"
            id="resources"
            placeholder="Resources Controlled"
            min="0"
            max="6"
            value="0"
          />
        </div>
        <div className="structure-bonus">
          <label htmlFor="structure-bonus">Structure Bonus</label>
          <input
            type="number"
            name="structure-bonus"
            id="structure-bonus"
            placeholder="Structure Bonus"
            min="0"
            value="0"
          />
        </div>
        <div className="complete">
          <button type="submit">Calculate</button>
        </div>
      </form>
      <div className="results">some final score here</div>
    </>
  );
};

export default App;
