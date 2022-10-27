

function HymnSelect(props){


    const lyrics = props.lyrics;
    const titles = lyrics.titles[props.lang];


    return(
        <div className="p-1">
            <select className="form-control">
            {titles && titles.map(item=> {
                
                let num = item.substring(0, item.indexOf(")"));


                return(
                    <option value={num} key={item}>
                        {item}
                    </option>
                )
            })}
            </select>
        </div>
    )

}

export default HymnSelect