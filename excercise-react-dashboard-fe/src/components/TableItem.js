import React from 'react';

function TableItem(props) {
    return (

        <tbody>
            {props.data.map((item, i) => 
                <tr key={item+i}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>${item.price}</td>
                    <td>
                        <ul>
                            {item.categories.map((cat,i) => 
                                <li key={cat+i}>{cat.name}</li>
                            )}
                        </ul>
                    </td>
                    <td>
                        <ul>

                            {item.colors.map((color,i) => 
                                <li key={color+i}><span style={{color: color.code}}>{color.name}</span></li>
                            )}
                            
                        </ul>
                    </td>
                    <td>{item.stock}</td>
                </tr>
            )}

        </tbody>

        
    );
}

export default TableItem;
