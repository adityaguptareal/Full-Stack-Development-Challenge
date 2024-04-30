// document.querySelector(".container").innerHTML  is use to get inner html of a document

// document.querySelector(".container").innerText is used to get the text inside a document

// document.querySelector(".container").outerHTML is used to get the inner html + the elment itself

// document.querySelector(".container").tagName is used to get the tag name of the document

// document.querySelector(".container").textContent is used to get the text content of the element(it gives only text and remove the tag)

// document.querySelector(".container").hidden is used to return the element is hidden or not, It return boolean value. To make the element hidden we have to specify it "hidden=true".

// document.querySelector(".container").hasAttribute("attribute_name") is used to check the whether the element has attribut or not. It return Boolean value.

// document.querySelector(".box").getAttribute("style or attribute_name") is used to get the attribute which are in the document. It returns a string.

// document.querySelector(".box").setAttribute("style","display:none") is used to set the desired attribute on the elemnt. It takes two arguments 1st one is attribute name and second one is the attribute property which you wanna change.

// document.querySelector(".box").attributes is used to get all the attributes which are applied on the elements. It returns a list of object

// document.querySelector(".box").removeAttribute("style(attribute_name)") is used to remove the attribute from the element.

// document.designMode="on" is used to make the document editable.

// data-(anyname) is used to create your own custom attribute but you have to insure that it starts with data.

// document.querySelector(".container").dataset is used to access all the data attribute that you have created. It return a object and ingnored "data"


//  <--------------inserting any element using DOM ---------------->
// let create = document.createElement("div")
// let created = create.innerText = "Hi Aditya I am Nishu"
// document.querySelector(".container").before(created)

// .before is used to add it before the targeted container
// .append is used to add it end the targeted container
// .prepend is used to add it before the targeted container
// .replaceWith(e) is used to replace the element from the node

// .insertAdjacentHTML(1st parameter, 2nd Parameter) is used to inser html. first parameter of the code specify where to place and 2nd parameter specify what html content to be placed.

// .remove() is used to remove the node from the DOM
// document.querySelector(".container").classList is used to get an array of list that contain the class name. .classList property is only used with querySelector it is not applicable on any other selecting method like getElementById
// document.querySelector(".container").className is used to get the class name which are available in that element.

// document.querySelector(".container").classList.remove("classname") is used to remove the from the element
// document.querySelector(".container").classList.add("classname") is used to add the class in the element
// document.querySelector(".container").classList.toggle("classname") is used to add the class in the element if it is not present and remove if it is present.
