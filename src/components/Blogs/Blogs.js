import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <div>
                <h1>What is Context API?</h1>
                <p>The React Context API  for a React app to effect produce global variables can be passed around. It also creates a stat at the very top level.  any child component  want can access that data later, without bothering parent component in  way. And it's very simple.It returns a consumer and a provider. Provider is a component  names suggests provides  its children</p>
            </div>
            <div>
                <h1>What is semantic tag?</h1>
                <p>Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page.A semantic element clearly describes its meaning to both the browser and the developerUsing Semantic Elements allows the browser to easily understand that the tag has been used for a specific purpose in HTML.HTML5 semantic tags define the purpose  element. using semantic tag help the browser understand the meaning of the content displaying it. By providing this extra clarity level .</p>
            </div>
            <div>
                <h1>Difference between inline and inline-blocks element?</h1>
                <p>The inline-block elements are similar  inline elements, but their width and height can determined.Compared to display inline, the major difference is  inline-block  set  width and height the element. Display  inline  top and bottom margins & paddings are not respected, and with display inline-block .  inline the width and height are not respected,padding top and bottom are present, but overleap  the lines above and under</p>
            </div>
        </div>
    );
};

export default Blogs;