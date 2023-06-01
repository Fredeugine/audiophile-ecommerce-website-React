export function DetailForm(){
    return(
        <div>
            <form  className='dForm'>
                <h1 className='hh1'>Checkout</h1>
                <h8 className='h55'>Billing Details</h8>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" id="name" placeholder="Alexei Ward" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="alexei@mail.com"  />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="656789034"  />
                </div>
                <h8 className='h55'>Shipping Info</h8>
                <div className="form-group">
                    <label htmlFor="address">Your Address</label>
                    <input type="text" id="address" placeholder="Avenida Navarra"  />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" placeholder="Madrid"  />
                </div>
                <div className="form-group">
                    <label htmlFor="zipcode">ZIP Code</label>
                    <input type="text" id="zipcode" placeholder="10001"  />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" placeholder="Spain"  />
                </div>
                <h8 className='h55'>Payment Details</h8>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}