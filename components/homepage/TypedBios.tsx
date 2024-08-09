import React from 'react';
import Typed from 'typed.js';

import Twemoji from '@/components/Twemoji';

const TypedBios = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    });
    return () => typed.current.destroy();
  }, []);

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I'm <b className="font-medium">Van Khaiii</b>.
        </li>
        <li>
          I live in <b className="font-medium">Ho Chi Minh, Viet Nam</b>.
        </li>
        <li>
          I was born in <b className="font-medium">Kon Tum</b> city.
        </li>
        <li>
          My first programming language I learned was <b className="font-medium">C++</b>.
        </li>
        <li>I have good learning ability and work hard.</li>
        <li>
          I'm focusing on <b className="font-medium">Machine Learning & Deep Learning</b>.
        </li>
        <li>
          I work mostly with <b className="font-medium">Python</b> technologies.
        </li>
        <li>
          I'm a hard-working person.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
};

export default TypedBios;
