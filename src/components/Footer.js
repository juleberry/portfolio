export default Footer = (props) => {
  let currentYear = document.write(new Date().getFullYear())

  return (
    <>
    <div>
    <p id="copyright">&copy;
    {currentYear} Jule Berry
    </p>
    </div>
    </>
  )
}