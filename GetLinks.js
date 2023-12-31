//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//
// Function Name:     GetLinks(LinksArray)
//
// January 19, 2023 - By: C.M. Jones
//
// Function Version ....:	1.0.0.0
// 
// Version Date ........:	01/19/2023
//
// This javascript gets all of the "a" tags on a web page, returns
// a value that GetHref depends on in order to return all the Href
// properties for those link tags.
//
// -------------
// Dependencies:
// -------------
//
// HTML document containing links in the form of being enclosed
// within the HTML anchor tag. (In other words, 'a' tags must be
// present within the document for this function to work correctly)
//
// ----------
// Arguments:
// ----------
//
// [returns] LinksArray
//
// This is the value that is generated by the GetLinks() function
// and returned by that function when you pass in the empty array
// as the function's argument. LinksArray is both the argument that
// is passed to the function as well as the return value upon a
// successful code execution w/out errors.
//
// ----------------
// Error Handling?:
// ----------------
//
// None
// 
//------------------------------------------------------------------------------------

let ___al = {};

let ___LinksArray = {};

function GetLinks(LinksArray) {

    let linksArray = new Array.constructor;

    linksArray = document.all[0].getElementsByTagName('a');

    LinksArray = linksArray;

    for (let index = 0; index < linksArray.length; index++) {

        linksList[index] = linksArray[index].href;

    }

    LinksList = linksList;

    return LinksArray;

}

let ___al1 = GetLinks(___LinksArray);


//------------------------------------------------------------------------------------
//
// End of function GetLinks(LinksArray)
//
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------


