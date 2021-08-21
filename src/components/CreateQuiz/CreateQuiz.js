import React from 'react'

function CreateQuiz() {
    return (
        <div>
            <form>
                <div>
                    <label>Q</label>
                    <input />
                </div>
                
                <div>
                    <input type="checkbox" />
                    <input />
                </div>

                <div>
                    <input type="checkbox" />
                    <input />
                </div>
                <div>
                    <input type="checkbox" />
                    <input />
                </div>
                <div>
                    <input type="checkbox" />
                    <input />
                </div>
                
                <button type="submit" >Next</button>
            </form>
        </div>
    )
}

export default CreateQuiz
