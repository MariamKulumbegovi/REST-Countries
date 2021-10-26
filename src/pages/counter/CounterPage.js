import { Counter } from '../../components/counter';

export const CounterPage = () => {
  const values = [1];

  return (
    <div className="section is-medium">
      <div>
        {values.map(item => {
          return <Counter initialValue={item} key={`item-${item}`} />;
        })}
      </div>
    </div>
  );
};
