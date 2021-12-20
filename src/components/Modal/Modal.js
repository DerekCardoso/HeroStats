import React from 'react'

import './Modal.css'

function Modal({ hero, onClose, show }) {
  if (!show) {
    return null
  }
  const gradArray = ['p-1', 'p-2', 'p-3', 'p-4', 'p-5', 'p-6']
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{hero.name}</h4>
          <img src={hero.image.url} className="person-img" />
        </div>
        <button onClick={onClose} className="button">
          close
        </button>
        <div className="modal-footer"></div>

        <div className="modal-body">
          <h3>Powerstats</h3>
          <div className="quality">
            {Object.entries(hero.powerstats).map((entry, i) => {
              if (entry[1] === 'null' || entry[1] === '-' || entry[1] === '')
                return <p>{entry[0] + ' : [Data unavailable]'}</p>

              return (
                <div key={i}>
                  <h3>{entry[0]}</h3>
                  <div className="stats-holder">
                    <div
                      className={`Powerstats ${gradArray[i]}`}
                      style={{ width: `${entry[1]}%` }}
                    >
                      {entry[1] + ' %'}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <h3>Biography</h3>
          <div className="biography">
            <ul>
              <li>
                Full-name: <span>{hero.biography['full-name']}</span>
              </li>
              <li>
                Alter-egos: <span>{hero.biography['alter-egos']}</span>
              </li>
              <li>
                Aliases: <span>{hero.biography.aliases}</span>
              </li>
              <li>
                Place-of-birth: <span>{hero.biography['place-of-birth']}</span>
              </li>
              <li>
                First-appearance:{' '}
                <span>{hero.biography['first-appearance']}</span>
              </li>
              <li>
                Publisher: <span>{hero.biography.publisher}</span>
              </li>
              <li>
                Aligment: <span>{hero.biography.alignment}</span>
              </li>
            </ul>
          </div>

          <h3>Appearance</h3>
          <div className="biography">
            <ul>
              <li>
                {' '}
                Gender: <span>{hero.appearance.gender}</span>
              </li>
              <li>
                Race: <span>{hero.appearance.race}</span>
              </li>
              <li>
                Height: <span>{hero.appearance.height}</span>
              </li>
              <li>
                Weight: <span>{hero.appearance.weight}</span>
              </li>
              <li>
                Eye-color: <span>{hero.appearance['eye-color']}</span>
              </li>
              <li>
                Hair-color: <span>{hero.appearance['hair-color']}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
