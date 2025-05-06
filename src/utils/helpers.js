export const generateID = () => {
  return Math.floor(Math.random() * 1000);
}

export const deleteChild = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export const existInArray = (arrray, id) =>{
  return arrray.some((item) => item.id === id);
}
