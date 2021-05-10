import React from 'react'
import Detail from '../components/DetailActivity/Detail'

const DetailActivity = ({match}) => {
    return (
        <div>
            <Detail id={match.params.id} />
        </div>
    )
}

export default DetailActivity
