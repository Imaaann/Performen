import "./tasksCSS.css"

const NewTabPop = ({submitFunc}) => {
  return (
    <div className="New-Tab-Pop-Container">
      <form onSubmit={submitFunc}>
        <h1 className="New-Tab-Pop-Header">New Tab</h1>
        <input  
          type='text'
          name='Name'
          placeholder='Name'
          aria-label='Name'
          className="New-Tab-Pop-Input"
        />
        <button type="submit" className="New-Tab-Pop-Button" >Add Tab!</button>
      </form>
    </div>
  )
}

export default NewTabPop