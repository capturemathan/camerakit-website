import withPure from './hoc/pure';

export default withPure(({ size }) => (
  <svg
    // width={size || 82}
    height={size || 30}
    viewBox="0 0 1204 241"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{
      // visually centering
      transform: 'translateX(4%) rotate(-.5deg)'
    }}
  >
    <path
      d="M559.668,98.779l-19.687,0c-0.417,-3.593 -1.133,-6.823 -2.149,-9.687c-1.015,-2.865 -2.461,-5.3 -4.336,-7.305c-1.875,-2.005 -4.244,-3.529 -7.109,-4.57c-2.864,-1.042 -6.328,-1.563 -10.391,-1.563c-4.479,0 -8.398,0.847 -11.757,2.539c-3.36,1.693 -6.159,4.141 -8.399,7.344c-2.239,3.203 -3.919,7.149 -5.039,11.836c-1.12,4.688 -1.68,10.026 -1.68,16.016l0,9.375c0,5.677 0.495,10.833 1.485,15.468c0.989,4.636 2.526,8.607 4.609,11.915c2.084,3.307 4.766,5.872 8.047,7.695c3.281,1.823 7.214,2.734 11.797,2.734c4.271,0 7.878,-0.495 10.82,-1.484c2.943,-0.99 5.378,-2.448 7.305,-4.375c1.927,-1.927 3.424,-4.297 4.492,-7.11c1.068,-2.812 1.836,-6.041 2.305,-9.687l19.687,0c-0.52,5.573 -1.823,10.716 -3.906,15.43c-2.083,4.713 -4.974,8.789 -8.672,12.226c-3.698,3.438 -8.216,6.12 -13.554,8.047c-5.339,1.927 -11.498,2.891 -18.477,2.891c-6.979,0 -13.294,-1.263 -18.945,-3.789c-5.651,-2.526 -10.469,-6.12 -14.453,-10.782c-3.985,-4.661 -7.045,-10.299 -9.18,-16.914c-2.136,-6.614 -3.203,-14.036 -3.203,-22.265l0,-9.219c0,-8.177 1.093,-15.586 3.281,-22.227c2.187,-6.64 5.312,-12.304 9.375,-16.992c4.062,-4.687 8.971,-8.307 14.727,-10.859c5.755,-2.552 12.2,-3.828 19.335,-3.828c6.771,0 12.761,0.976 17.969,2.929c5.209,1.954 9.623,4.662 13.242,8.125c3.62,3.464 6.459,7.592 8.516,12.383c2.057,4.792 3.372,10.026 3.945,15.703Zm627.891,-8.359l15.781,0l0,11.172l-15.781,0l0,52.422c0,2.187 0.26,3.945 0.781,5.273c0.521,1.328 1.211,2.357 2.071,3.086c0.859,0.729 1.849,1.211 2.968,1.445c1.12,0.235 2.279,0.352 3.477,0.352c1.198,0 2.461,-0.117 3.789,-0.352c1.328,-0.234 2.357,-0.429 3.086,-0.586l0,11.719c-1.146,0.313 -2.63,0.651 -4.453,1.016c-1.823,0.364 -4.037,0.547 -6.641,0.547c-2.656,0 -5.169,-0.378 -7.539,-1.133c-2.37,-0.755 -4.44,-2.018 -6.211,-3.789c-1.771,-1.771 -3.177,-4.102 -4.219,-6.992c-1.041,-2.891 -1.562,-6.446 -1.562,-10.664l0,-52.344l-15.391,0l0,-11.172l15.391,0l0,-20.469l14.453,0l0,20.469Zm-593.984,24.375l-18.985,0c0,-3.333 0.821,-6.55 2.461,-9.648c1.641,-3.099 3.972,-5.86 6.992,-8.282c3.021,-2.422 6.68,-4.362 10.977,-5.82c4.297,-1.458 9.101,-2.188 14.414,-2.188c4.74,0 9.115,0.612 13.125,1.836c4.01,1.224 7.474,3.047 10.391,5.469c2.916,2.422 5.182,5.443 6.796,9.063c1.615,3.619 2.422,7.851 2.422,12.695l0,37.5c0,7.604 1.068,13.672 3.203,18.203l0,1.328l-19.375,0c-0.52,-0.989 -0.95,-2.161 -1.289,-3.515c-0.338,-1.355 -0.638,-2.813 -0.898,-4.375c-1.25,1.302 -2.643,2.526 -4.18,3.671c-1.536,1.146 -3.229,2.149 -5.078,3.008c-1.849,0.86 -3.854,1.537 -6.015,2.032c-2.162,0.494 -4.467,0.742 -6.915,0.742c-4.218,0 -8.098,-0.638 -11.64,-1.914c-3.542,-1.276 -6.576,-3.047 -9.102,-5.313c-2.526,-2.265 -4.505,-4.935 -5.937,-8.008c-1.432,-3.073 -2.149,-6.406 -2.149,-10c0,-4.531 0.86,-8.541 2.578,-12.031c1.719,-3.49 4.219,-6.406 7.5,-8.75c3.282,-2.344 7.305,-4.128 12.071,-5.351c4.765,-1.224 10.195,-1.836 16.289,-1.836l11.953,0l0,-5.547c0,-4.375 -1.224,-7.878 -3.672,-10.508c-2.448,-2.63 -6.172,-3.945 -11.172,-3.945c-2.239,0 -4.271,0.299 -6.094,0.898c-1.822,0.599 -3.372,1.406 -4.648,2.422c-1.276,1.016 -2.266,2.226 -2.969,3.633c-0.703,1.406 -1.054,2.916 -1.054,4.531Zm365.546,0l-18.984,0c0,-3.333 0.82,-6.55 2.461,-9.648c1.641,-3.099 3.971,-5.86 6.992,-8.282c3.021,-2.422 6.68,-4.362 10.977,-5.82c4.297,-1.458 9.101,-2.188 14.414,-2.188c4.739,0 9.114,0.612 13.125,1.836c4.01,1.224 7.474,3.047 10.39,5.469c2.917,2.422 5.183,5.443 6.797,9.063c1.615,3.619 2.422,7.851 2.422,12.695l0,37.5c0,7.604 1.068,13.672 3.203,18.203l0,1.328l-19.375,0c-0.52,-0.989 -0.95,-2.161 -1.289,-3.515c-0.338,-1.355 -0.638,-2.813 -0.898,-4.375c-1.25,1.302 -2.643,2.526 -4.18,3.671c-1.536,1.146 -3.229,2.149 -5.078,3.008c-1.849,0.86 -3.854,1.537 -6.016,2.032c-2.161,0.494 -4.466,0.742 -6.914,0.742c-4.218,0 -8.099,-0.638 -11.64,-1.914c-3.542,-1.276 -6.576,-3.047 -9.102,-5.313c-2.526,-2.265 -4.505,-4.935 -5.937,-8.008c-1.433,-3.073 -2.149,-6.406 -2.149,-10c0,-4.531 0.86,-8.541 2.578,-12.031c1.719,-3.49 4.219,-6.406 7.5,-8.75c3.282,-2.344 7.305,-4.128 12.071,-5.351c4.765,-1.224 10.195,-1.836 16.289,-1.836l11.953,0l0,-5.547c0,-4.375 -1.224,-7.878 -3.672,-10.508c-2.448,-2.63 -6.172,-3.945 -11.172,-3.945c-2.239,0 -4.271,0.299 -6.094,0.898c-1.823,0.599 -3.372,1.406 -4.648,2.422c-1.276,1.016 -2.266,2.226 -2.969,3.633c-0.703,1.406 -1.054,2.916 -1.055,4.531Zm-141.953,23.906c0.261,3.282 0.951,6.302 2.071,9.063c1.119,2.76 2.643,5.143 4.57,7.148c1.927,2.005 4.206,3.581 6.836,4.727c2.63,1.146 5.612,1.718 8.945,1.718c4.688,0 8.763,-0.937 12.227,-2.812c3.463,-1.875 6.471,-4.453 9.023,-7.734l10.235,9.765c-1.355,2.031 -3.034,3.998 -5.039,5.899c-2.006,1.901 -4.349,3.593 -7.032,5.078c-2.682,1.484 -5.716,2.682 -9.101,3.594c-3.386,0.911 -7.188,1.367 -11.407,1.367c-6.25,0 -11.875,-1.042 -16.875,-3.125c-5,-2.084 -9.244,-4.948 -12.734,-8.594c-3.489,-3.646 -6.172,-7.969 -8.047,-12.969c-1.875,-5 -2.812,-10.39 -2.812,-16.172l0,-3.125c0,-6.666 0.989,-12.695 2.968,-18.086c1.98,-5.39 4.688,-9.974 8.125,-13.75c3.438,-3.776 7.487,-6.692 12.149,-8.75c4.661,-2.057 9.674,-3.086 15.039,-3.086c6.146,0 11.484,1.029 16.016,3.086c4.531,2.058 8.281,4.935 11.25,8.633c2.968,3.698 5.182,8.099 6.64,13.203c1.459,5.104 2.188,10.703 2.188,16.797l0,8.125l-55.235,0Zm327.657,36.25l-14.454,0l0,-84.531l14.454,0l0,84.531Zm-238.75,0l-18.985,0l0,-84.531l18.125,0l0.469,9.453c2.135,-3.437 4.779,-6.133 7.93,-8.086c3.151,-1.953 6.862,-2.93 11.132,-2.93c1.094,0 2.331,0.118 3.711,0.352c1.381,0.234 2.383,0.482 3.008,0.742l-0.078,17.813c-1.25,-0.209 -2.513,-0.365 -3.789,-0.469c-1.276,-0.104 -2.591,-0.156 -3.945,-0.156c-4.584,0 -8.308,0.885 -11.172,2.656c-2.865,1.771 -5,4.219 -6.406,7.344l0,57.812Zm140,0l-15,0l0,-113.75l15,0l0,56.25l12.343,-13.75l38.203,-42.5l18.125,0l-44.765,50.235l48.281,63.515l-17.969,0l-40.312,-52.89l-13.906,14.453l0,38.437Zm-365.079,0l-18.984,0l0,-84.531l17.891,0l0.547,8.828c2.812,-3.281 6.237,-5.833 10.273,-7.656c4.037,-1.823 8.737,-2.735 14.102,-2.735c5.156,0 9.765,1.029 13.828,3.086c4.062,2.058 7.187,5.352 9.375,9.883c2.812,-3.958 6.367,-7.109 10.664,-9.453c4.297,-2.344 9.388,-3.516 15.273,-3.516c4.375,0 8.281,0.586 11.719,1.758c3.437,1.172 6.341,3.021 8.711,5.547c2.37,2.526 4.193,5.768 5.469,9.727c1.276,3.958 1.914,8.724 1.914,14.297l0,54.765l-18.985,0l0,-54.844c0,-3.125 -0.351,-5.69 -1.054,-7.695c-0.703,-2.005 -1.719,-3.607 -3.047,-4.805c-1.328,-1.197 -2.917,-2.031 -4.766,-2.5c-1.849,-0.468 -3.945,-0.703 -6.289,-0.703c-4.323,0 -7.851,1.159 -10.586,3.477c-2.734,2.318 -4.648,5.351 -5.742,9.101c0,0.245 0.011,0.5 0.034,0.767l0.01,0.107c0.023,0.267 0.034,0.523 0.034,0.767l0,56.328l-18.984,0l0,-54.609c0,-2.969 -0.352,-5.469 -1.055,-7.5c-0.703,-2.031 -1.719,-3.672 -3.047,-4.922c-1.328,-1.25 -2.93,-2.148 -4.805,-2.695c-1.875,-0.547 -3.984,-0.821 -6.328,-0.821c-4.062,0 -7.408,0.834 -10.039,2.5c-2.63,1.667 -4.674,3.933 -6.133,6.797l0,61.25Zm-57.812,-39.687l-10.234,0c-7.032,0 -12.318,1.224 -15.86,3.672c-3.541,2.447 -5.312,5.911 -5.312,10.39c0,1.719 0.286,3.307 0.859,4.766c0.573,1.458 1.432,2.721 2.578,3.789c1.146,1.068 2.539,1.901 4.18,2.5c1.641,0.599 3.555,0.898 5.742,0.898c2.188,0 4.232,-0.286 6.133,-0.859c1.901,-0.573 3.62,-1.328 5.156,-2.266c1.537,-0.937 2.878,-2.018 4.024,-3.242c1.145,-1.224 2.057,-2.461 2.734,-3.711l0,-15.937Zm365.547,0l-10.235,0c-7.031,0 -12.317,1.224 -15.859,3.672c-3.542,2.447 -5.312,5.911 -5.312,10.39c0,1.719 0.286,3.307 0.859,4.766c0.573,1.458 1.432,2.721 2.578,3.789c1.146,1.068 2.539,1.901 4.18,2.5c1.64,0.599 3.554,0.898 5.742,0.898c2.187,0 4.232,-0.286 6.133,-0.859c1.901,-0.573 3.62,-1.328 5.156,-2.266c1.537,-0.937 2.878,-2.018 4.023,-3.242c1.146,-1.224 2.058,-2.461 2.735,-3.711l0,-15.937Zm-152.5,-31.172c-5.208,0 -9.414,1.823 -12.617,5.469c-3.203,3.645 -5.248,8.724 -6.133,15.234l36.172,0l0,-1.406c-0.157,-2.5 -0.56,-4.909 -1.211,-7.227c-0.651,-2.318 -1.654,-4.375 -3.008,-6.172c-1.354,-1.797 -3.112,-3.229 -5.273,-4.297c-2.162,-1.067 -4.805,-1.601 -7.93,-1.601Zm292.969,-36.094c0,-2.344 0.716,-4.323 2.148,-5.937c1.432,-1.615 3.555,-2.422 6.367,-2.422c2.813,0 4.948,0.807 6.406,2.422c1.459,1.614 2.188,3.593 2.188,5.937c0,2.344 -0.729,4.297 -2.188,5.859c-1.458,1.563 -3.593,2.344 -6.406,2.344c-2.812,0 -4.935,-0.781 -6.367,-2.344c-1.432,-1.562 -2.148,-3.515 -2.148,-5.859Z"
      fill="#3c425b"
      fillRule="nonzero"
    />
    <path
      d="M40.945,200.303c0,11.038 8.961,19.999 20,20l20,0l0,20l-20,0c-22.077,0 -40,-17.924 -40,-40l0,-55c0,-11.039 -8.962,-20 -20,-20l-0.008,0l0,-10l0.008,0c11.038,0 20,-8.962 20,-20l0,-55c0,-22.077 17.923,-40 40,-40l20,0l0,20l-20,0c-11.039,0 -20,8.962 -20,20l0,60l-0.001,0.129c-0.069,10.975 -8.998,19.864 -19.988,19.871l0,0c11.033,0.006 19.989,8.965 19.989,20l0,60Zm196.046,-22.924c-14.438,14.18 -34.226,22.931 -56.043,22.931l-0.008,0l34.646,-60.007l21.405,37.076Zm-77.467,20.025c-20.378,-5.658 -37.495,-19.187 -47.865,-37.101l69.286,0l-21.421,37.101Zm98.903,-97.101c1.648,6.394 2.525,13.097 2.525,20.004c0,14.569 -3.903,28.234 -10.72,40.006l-34.646,-60.01l42.841,0Zm62.51,-60c0,-11.038 -8.961,-20 -20,-20l-20,0l0,-20l20,0c22.077,0 40,17.923 40,40l0,55c0,11.038 8.962,20 20,20l0.008,0l0,10l-0.008,0c-11.038,0 -20,8.961 -20,20l0,55c0,22.076 -17.924,40 -40,40l-20,0l0,-20l20,0c11.039,-0.001 20,-8.962 20,-20l0,-60c0,-11.035 8.955,-19.994 19.988,-20l0,0c-10.99,-0.007 -19.918,-8.896 -19.988,-19.871l0,-0.129l0,-60Zm-174.633,100l-42.836,0c-1.647,-6.392 -2.523,-13.093 -2.523,-19.996c0,-14.569 3.902,-28.233 10.718,-40.004l34.641,60Zm0,-40l-21.401,-37.067c14.438,-14.18 34.226,-22.932 56.042,-22.933l-34.641,60Zm103.93,-20l-69.289,0l21.418,-37.097c20.379,5.656 37.498,19.183 47.871,37.097Z"
      fill="#3c425b"
      fillRule="nonzero"
    />
  </svg>
));