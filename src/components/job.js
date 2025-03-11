import React from "react";
import { FormattedDate, FormattedNumber } from "react-intl";

const Job = (props) => {
  const formatSalary = (salary, locale) => {
    if (salary >= 1) {
      return (
        <>
          <FormattedNumber value={salary} />
          {locale.startsWith("es") ? (
            salary === 1 ? " millón" : " millones"
          ) : (
            " million"
          )}
        </>
      );
    }
    return <FormattedNumber value={salary} />;
  };

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{formatSalary(props.offer.salary, props.locale)}</td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>
        <FormattedNumber value={props.offer.views} />
      </td>
    </tr>
  );
};

export default Job;