type CardType = {
  children: React.ReactNode;
  title?: string;
  titleCSS?: string;
  classname?: string;
};

export const Card = ({ children, title, titleCSS, classname }: CardType) => {
  return (
    <div className={`${classname} border rounded- p-2`}>
      <h1 className={`${titleCSS} uppercase text-muted-foreground`}>{title}</h1>
      {children}
    </div>
  );
};
