
export const copyTree = (tree) => {

  const _go = (node) => {
    if (!node.left && !node.right){
      return {...node};
    }

    let left = {};
    let right = {};

    if( node.left ){ left = _go(node.left); }
    if( node.right ){ right = _go(node.right); }

    let result = {
      ...node,
      children: [left, right]
    }
    return result;
  }

  let data = {value: null, children: [{left: null, right: null}, {left: null, right: null}]};
  
  if(tree.root) { data = _go(tree.root); }

  return data;
}

export const generateUniqueNumbers = (count) => {
  let result = [];

  let defaultMaxValue = 100;
  if (count > defaultMaxValue) {
    defaultMaxValue = count * 2;
  }
  while(result.length < count){
    let num = Math.floor(Math.random()*defaultMaxValue);
    if(!result.includes(num)){
      result.push(num);
    }
  }

  return result;
}
