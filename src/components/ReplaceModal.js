import React, {useState} from 'react';

export default function Replace(props) {
  const [find, setFind] = useState('');
  const [replace, setReplace] = useState('');

  const resultCount = () => {
    if (find.length!==0) {
        let count = 0;
        let index = props.text.indexOf(find);
      
        while (index !== -1) {
          count++;
          index = props.text.indexOf(find, index + 1);
        }
      
        return count;
    }
  }

  const handleReplaceAll = () => {
    props.handleReplace(find, replace);
  };

  return (
    <div className='text-center' style={{width: '100%', height: '100%'}}>
        <input className="form-control shadow-none my-2 mx-0 py-1 px-2" type="text" placeholder='Find' name='find' value={find} onChange={(e) => setFind(e.target.value)} />
        <input className="form-control shadow-none my-2 mx-0 py-1 px-2" type="text" placeholder='Replace' name='replace' value={replace} onChange={(e) => setReplace(e.target.value)} />
        <p>{resultCount()?resultCount()+" results found":"No results"}</p>
        <button disabled={find.length===0 || replace.length===0 || resultCount()===0} className="btn btn-sm btn-primary my-2" onClick={handleReplaceAll}>Replace All</button>
    </div>
  )
}
