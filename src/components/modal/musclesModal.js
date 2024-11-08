// MuscleGroupModal.js
import React from 'react';
import '../../css/MuscleModal.css'

const MuscleGroupModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <h2>Choose Your Muscle Groups</h2>
        <div className="groups-container">
          <div className="group-column">
            <h4 className="group-heading">Legs</h4>
            <label><input type="checkbox" /> Quads</label>
            <label><input type="checkbox" /> Hamstrings</label>
            <label><input type="checkbox" /> Calves</label>
            <label><input type="checkbox" /> Glutes</label>
          </div>
          <div className="group-column">
            <h4 className="group-heading">Shoulders</h4>
            <label><input type="checkbox" />Anterior</label>
          </div>
          <div className="group-column">
            <h4 className="group-heading"> Biceps</h4>
          </div>
          <div className="group-column">
            <h4 className="group-heading">Triceps</h4>
          </div>
          <div className="group-column">
            <h4 className="group-heading">Chest</h4>
          </div>
          <div className="group-column">
            <h4 className="group-heading">Back</h4>
          </div>
        </div>
        <button className="done-button" onClick={onClose}>DONE</button>
      </div>
    </div>
  );
};

// const styles = {
//   overlay: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modal: {
//     background: '#fff',
//     padding: '20px',
//     borderRadius: '8px',
//     width: '400px',
//     textAlign: 'center',
//   },
//   groupsContainer: {
//     display: 'flex',
//     justifyContent: 'space-around',
//     margin: '20px 0',
//   },
//   groupColumn: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   doneButton: {
//     marginTop: '20px',
//     padding: '10px 20px',
//     borderRadius: '8px',
//     border: 'none',
//     background: '#333',
//     color: '#fff',
//     cursor: 'pointer',
//   },
// };

export default MuscleGroupModal;
