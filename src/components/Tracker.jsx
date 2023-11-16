const Tracker = ({ catalog, onTrack }) => {

  if (catalog.length === 0) return

  let prev = catalog.info.prev
  let next = catalog.info.next

  if (prev !== null) prev = prev.split('?').slice(-1)[0]
  if (next !== null) next = next.split('?').slice(-1)[0]

  return (
    <>
      <div className="box__btn_wrap">
        {
          !catalog.info.prev ?
            null
            :
            <button className="box__btn button" onClick={() => onTrack(prev)}>prev</button>
        }
        {
          !catalog.info.next ?
            null
            :
            <button className="box__btn button" onClick={() => onTrack(next)}>next</button>
        }
      </div>
    </>
  )
}
export { Tracker }