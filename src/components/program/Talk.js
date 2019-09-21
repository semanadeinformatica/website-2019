import React, { useState } from "react"
import { Link } from "gatsby"
import { FaAngleDown } from "react-icons/fa"
import { TimePlace, Speakers } from "../utils/programUtils"

const Talk = ({
  title,
  path,
  speakers,
  start_time,
  end_time,
  place,
  description,
}) => {
  const [showAll, setShowAll] = useState(false)
  return (
    <div>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          <FaAngleDown />
        </button>
      </div>
      <div>
        <h3>
          <Link to={path}>{title}</Link>
        </h3>
        <TimePlace start_time={start_time} end_time={end_time} place={place} />
        <Speakers speakers={speakers} path={path} />
        <p
          style={{ display: showAll ? "block" : "none" }}
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </div>
  )
}

export default Talk
