import bookImg from "../assets/book.png";
const Header = () => {
    return(<>
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="flex space-between items-center">
                <img src={bookImg} alt="" className="w-8"/>
                <div className="">Librarian</div>
            </div>
            <div className="flex justify-between items-center space-x-8">
                <div className="">Books</div>
                <div className="">Loans</div>
                <div className="">Students</div>
                <div className="">Accounts</div>
            </div>
            <div className="flex space-x-4">
                <div className="">Login</div>
                <div className="">Signup</div>
            </div>
        </header>
    </>)
}

export default Header;