import React from 'react';
import { Link } from 'react-router-dom';

const catgor= () => (
  <div className='row'>
    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link className="icon-box style-2 rounded" to="">
            <i className="fa fa-image"></i>
            <span>Fan Art</span>
        </Link>
    </div>
    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link className="icon-box style-2 rounded" to="">
            <i className="fa fa-diamond"></i>
            <span>Official NFT's</span>
        </Link>
    </div>
    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link className="icon-box style-2 rounded" to="">
            <i className="fa fa-tags"></i>
            <span>Merchandise</span>
        </Link>
    </div>
    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link className="icon-box style-2 rounded" to="">
            <i className="fa fa-users"></i>
            <span>NFT Memberships</span>
        </Link>
    </div>
    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link className="icon-box style-2 rounded" to="">
            <i className="fa fa-vcard"></i>
            <span>Trading Cards</span>
        </Link>
    </div>
    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link className="icon-box style-2 rounded" to="">
            <i className="fa fa-trophy"></i>
            <span>Collectibles</span>
        </Link>
    </div>
  </div>
);
export default catgor;