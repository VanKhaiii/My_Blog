import clsx from 'clsx';

const Greeting = () => {
  const className = clsx(
    'bg-gradient-to-r from-green-600 to-red-600 dark:bg-gradient-to-l dark:from-emerald-500 dark:to-lime-600',
    'bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent md:text-7xl md:leading-[86px]'
  );

  return (
    <div className={className}>
      Hi everybody! <span className="font-bold">This is where I study and store my knowledge.</span>
    </div>
  );
};

export default Greeting;
