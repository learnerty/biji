import React from 'react'

class CardArr extends React.Component{
  handleClick(ind){
    this.props.hand(ind);
  }
  render(){
    let {data} = this.props;
    let styles = {
      root:{
        height:'80px',
        marginBottom:'20px'
      },
      index:{
        width:'80px',
        height:'80px',
        lineHeight:'80px',
        float:'left',
        textAlign:'center',
        background:'blue',
        color:'#fff',
        fontSize:'24px'
      }
    }
    let cards = data.map(item =>
      <div style={styles.root} key={item.index}>
        <div style={styles.index}>{item.index}</div>
        <div>
          <h3 style={{float:'left',margin:'0 10px',lineHeight:'80px'}}>{item.title}</h3>
          <p style={{float:'left',margin:'0',lineHeight:'80px'}}>{item.date}</p>
        </div>
        <button style={{float:'right'}} onClick={this.handleClick.bind(this,item.index)}>删除</button>
      </div>)
    return(
      <div>
        {cards}
      </div>

    )
  }
}

CardArr.defaultProps = {
  data:[]
}
export default CardArr
