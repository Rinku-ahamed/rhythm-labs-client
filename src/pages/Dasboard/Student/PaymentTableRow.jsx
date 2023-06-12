const PaymentTableRow = ({ item, index }) => {
  return (
    <tr key={item._id}>
      <th>{index + 1}</th>
      <td>{item.className}</td>
      <td>
        <div>
          <img
            src={item.classImage}
            alt="Avatar Tailwind CSS Component"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </td>
      <td>{item.instructorName}</td>
      <td>{item.instructorEmail}</td>
      <td>${item.price}</td>
      <td>{item.date}</td>
      <td>{item.transactionId}</td>
    </tr>
  );
};

export default PaymentTableRow;
