const db = require('../config/db');

const SongModel = {
    getAllSongs: (callback) => {
        db.query('SELECT * FROM tblplaylist', callback);
    },
    addSong: (newSong, callback) => {
        db.query('INSERT INTO tblplaylist SET ?', newSong, callback);
    },
    deleteSong: (id, callback) => {
        db.query('DELETE FROM tblplaylist WHERE id = ?', [id], callback);
    },
    getSongById: (id, callback) => {
      db.query('SELECT * FROM tblplaylist WHERE id = ?', [id], (err, results) => {
          if (err) {
              return callback(err, null);
          } 
          return callback(null, results[0]);  
      });
  },  
    updateSong: (id, updatedSong, callback) => {
        db.query('UPDATE tblplaylist SET ? WHERE id = ?', [updatedSong, id], callback);
    }
};

module.exports = SongModel;