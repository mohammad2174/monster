import React, {Component} from 'react';

// function Card(props) {
//     return (
//         <div className="card">
//             <heade className="card-header">
//                 <h2>{props.title}</h2>
//             </heade>
//             <section className="card-body">
//                 <p>{props.body}</p>
//             </section>
//             <footer>
//                 <p>Card Footer</p>
//             </footer>
//         </div>
//     )
// }
class Card extends Component{
    eventHandler(e) {
        console.log(this)
        console.log('click')
    }
        render() {
            let{title,body} = this.props;
            return (
                <div className="card">
                    <heade className="card-header">
                        <h2>{title}</h2>
                    </heade>
                    <section className="card-body">
                        <p>{body}</p>
                        <button onClick={this.eventHandler.bind(this,'xxx')}>click</button>
                    </section>
                    <footer>
                        <p>Card Footer</p>
                    </footer>
                </div>
            )
        }
}

export default Card;