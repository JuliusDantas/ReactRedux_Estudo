import React from 'react'

import students from '../../data/students'

export default props =>{

    const listStudents = students.map((student, i) => {
        return <ol key={student.id}>
            {student.id} - {student.nome} = nota: {student.nota}
        </ol>
    })
    return(
        <div>
            <ul>
                {listStudents}
            </ul>
        </div>
    )
}