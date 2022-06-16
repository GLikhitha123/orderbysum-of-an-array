const sum =s=>[...s].reduce((t,x)=>t+(+x),0)
  ,   sortStrArray =s=>s.split(' ').sort((a,b)=>{r=sum(a)-sum(b);return (r?r:(+a)-(+b))}).join(' ')
  ;

const values= [ '1 3', '4 2', '2 1' ];

values.forEach(val=>console.log(`sortStrArray('${val}') -> '${sortStrArray(val) }'`))

