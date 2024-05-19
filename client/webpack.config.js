module.exports = {
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ['babel-loader', '@svgr/webpack'],
        },
        // ... other rules
      ],
    },
    // ... other configurations
  };