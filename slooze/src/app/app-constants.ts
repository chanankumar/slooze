export const constants = {
    SUPABASE_URL : process.env['PROJECT_URL'] ,
    SUPABASE_ANON_KEY : process.env['ANON_KEY'],
    OVERVIEW_CHART_MAX_Y : 6000,
    OVERVIEW_CHART_STEPSIZE : 1500,
    OVERVIEW_CHART_DATA : {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
        {
            data: [1500, 4600, 1000, 4800, 3000, 3400, 4600, 2900, 500, 3200, 1300, 3100],
            backgroundColor: '#3399FF',
            hoverBackgroundColor: '#1f78d1',
            barPercentage : 1.0
        }
        ]
    },
        EARNING_CHART_DATA : {
            labels: ['1','2','3','4','5','6','7','8'],
            datasets: [
            {
                data: [500, 800, 400, 800, 400, 500, 700, 400],
                backgroundColor: '#00ff2a',
                hoverBackgroundColor: '#00b01d',
                barPercentage : 1.0
            }
            ],
        },
        TOTAL_EARNING_CHART_DATA : {
            labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
            datasets: [
                {
                label: 'This Week',
                data: [280, 150, 300, 400, 230, 310, 330],
                backgroundColor: 'rgba(22,163,74,1)',
                borderRadius: {
                    topLeft: 6,
                    topRight: 6,
                    bottomLeft: 16,
                    bottomRight: 16,
                },
                barThickness: 30,
                stack: 'total',
                },
                {
                label: 'Gap',
                data: [40, 40, 40, 40, 40, 40, 40], // Gap height
                backgroundColor: 'rgba(0,0,0,0)', // Invisible
                barThickness: 30,
                stack: 'total',
                borderRadius: {
                    topLeft: 6,
                    topRight: 6,
                    bottomLeft: 16,
                    bottomRight: 16,
                }
                },
                {
                label: 'Last Week',
                data: [20, 280, 120, 100, 130, 60, 60],
                backgroundColor: 'rgba(22,163,74,0.3)',
                borderRadius: {
                    topLeft: 6,
                    topRight: 6,
                    bottomLeft: 6,
                    bottomRight: 6,
                },
                barThickness: 30,
                stack: 'total',
                },
            ],
        },
    TOTAL_EARNING_LINECHART : {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [30, 25, 20, 35, 90, 45, 50, 55, 60, 58, 59, 61],
        borderColor: '#4ade80',
        backgroundColor: 'rgba(74,222,128,0.1)',
        pointBackgroundColor: '#4ade80',
        pointBorderColor: '#ffffff',
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4,
        fill: true,
      },
      {
        data: [45, 40, 35, 30, 30, 35, 38, 37, 39, 41, 44, 46],
        borderColor: '#cbd5e1',
        backgroundColor: 'transparent',
        pointBackgroundColor: '#cbd5e1',
        pointRadius: 5,
        tension: 0.4,
        fill: false,
      }
    ]
  },
  SUBSCRIBER_LINECHART : {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [30, 25, 20, 35, 90, 45, 50, 55, 60, 58, 59, 61],
        borderColor: '#4ade80',
        backgroundColor: 'rgba(74,222,128,0.1)',
        pointBackgroundColor: '#4ade80',
        pointBorderColor: '#ffffff',
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4,
        fill: false,
      },
    ]
  },
  TOTAL_EARNING_LINECHART_OVERVIEW : {
    labels: ['Nov 20th', 'Nov 23th', 'Nov 26th', 'Nov 29th', 'Dec 1st', 'Dec 4th', 'Dec 7th', 'Dec 10th', 'Dec 13th', 'Dec 15th', 'Dec 18th', 'Dec 20th'],
    datasets: [
      {
        data: [30, 25, 20, 35, 90, 45, 50, 55, 60, 58, 59, 61],
        borderColor: '#4ade80',
        backgroundColor: 'rgba(74,222,128,0.1)',
        pointBackgroundColor: '#4ade80',
        pointBorderColor: '#ffffff',
        pointRadius: 0,
        pointHoverRadius: 0,
        tension: 0.4,
        fill: false,
      },
      {
        data: [45, 40, 35, 30, 30, 35, 38, 37, 39, 41, 44, 46],
        borderColor: '#cbd5e1',
        backgroundColor: 'transparent',
        pointBackgroundColor: '#cbd5e1',
        pointRadius: 0,
        tension: 0.4,
        fill: false,
      }
    ]
  },
  PRODUCT_LIST : [
    {
      image: '',
      email: 'Youremail@email.com',
      date: '02/10/2024',
      amount: '$100'
    },
        {
      image: '',
      email: 'Youremail@email.com',
      date: '02/10/2024',
      amount: '$100'
    },
        {
      image: '',
      email: 'Youremail@email.com',
      date: '02/10/2024',
      amount: '$100'
    },
        {
      image: '',
      email: 'Youremail@email.com',
      date: '02/10/2024',
      amount: '$100'
    }
    
  ],
  PRODUCT_LIST_SUCCESS : [
    {
      image: '',
      email: 'Youremail@email.com',
      date: '02/10/2024',
      amount: '$100'
    },
        {
      image: '',
      email: 'Youremail@email.com',
      date: '02/10/2024',
      amount: '$100'
    },
        {
      image: '',
      email: 'Youremail@email.com',
      date: '02/10/2024',
      amount: '$100'
    },
        {
      image: '',
      email: 'Youremail@email.com',
      date: '02/10/2024',
      amount: '$100'
    },
    {
      image: '',
      email: 'Youremail@email.com',
      date: '02/10/2024',
      amount: '$100'
    },
    {
      image: '',
      email: 'Youremail@email.com',
      date: '02/10/2024',
      amount: '$100'
    },
    {
      image: '',
      email: 'Youremail@email.com',
      date: '02/10/2024',
      amount: '$100'
    }
  ],

    TOTAL_EARNING_LINECHART_OVERVIEW_1 : {
    labels: ['Nov 20th', 'Nov 23th', 'Nov 26th', 'Nov 29th', 'Dec 1st', 'Dec 4th', 'Dec 7th', 'Dec 10th', 'Dec 13th', 'Dec 15th', 'Dec 18th', 'Dec 20th'],
    datasets: [
      {
        data: [30, 25, 20, 35, 90, 45, 50, 55, 60, 58, 59, 61],
        borderColor: '#4ade80',
        backgroundColor: 'rgba(171, 77, 0, 0.1)',
        pointBackgroundColor: '#4ade80',
        pointBorderColor: '#ffffff',
        pointRadius: 0,
        pointHoverRadius: 0,
        tension: 0.4,
        fill: false,
      },
      {
        data: [45, 40, 35, 30, 30, 35, 38, 37, 39, 41, 44, 46],
        borderColor: 'gray',
        backgroundColor: 'transparent',
        pointBackgroundColor: '#cbd5e1',
        pointRadius: 0,
        tension: 0.4,
        fill: false,
      }
    ]
  },

    TOTAL_EARNING_LINECHART_OVERVIEW_2 : {
    labels: ['Nov 20th', 'Nov 23th', 'Nov 26th', 'Nov 29th', 'Dec 1st', 'Dec 4th', 'Dec 7th', 'Dec 10th', 'Dec 13th', 'Dec 15th', 'Dec 18th', 'Dec 20th'],
    datasets: [
      {
        data: [30, 25, 40, 45, 70, 65, 50, 55, 60, 58, 59, 61],
        borderColor: '#violet',
        backgroundColor: 'rgba(74,222,128,0.1)',
        pointBackgroundColor: '#4ade80',
        pointBorderColor: '#ffffff',
        pointRadius: 0,
        pointHoverRadius: 0,
        tension: 0.4,
        fill: false,
      },
      {
        data: [65, 70, 75, 70, 50, 45, 38, 37, 39, 41, 44, 46],
        borderColor: '#cbd5e1',
        backgroundColor: 'transparent',
        pointBackgroundColor: '#cbd5e1',
        pointRadius: 0,
        tension: 0.4,
        fill: false,
      }
    ]
  },

    TOTAL_EARNING_LINECHART_OVERVIEW_3 : {
    labels: ['Nov 20th', 'Nov 23th', 'Nov 26th', 'Nov 29th', 'Dec 1st', 'Dec 4th', 'Dec 7th', 'Dec 10th', 'Dec 13th', 'Dec 15th', 'Dec 18th', 'Dec 20th'],
    datasets: [
      {
        data: [60, 65, 60, 55, 70, 65, 60, 65, 70, 88, 89, 81],
        borderColor: '#BA8E23',
        backgroundColor: 'rgba(74,222,128,0.1)',
        pointBackgroundColor: '#4ade80',
        pointBorderColor: '#ffffff',
        pointRadius: 0,
        pointHoverRadius: 0,
        tension: 0.4,
        fill: false,
      },
      {
        data: [65, 60, 55, 50, 50, 55, 58, 57, 59, 61, 64, 66],
        borderColor: '#cbd5e1',
        backgroundColor: 'transparent',
        pointBackgroundColor: '#cbd5e1',
        pointRadius: 0,
        tension: 0.4,
        fill: false,
      }
    ]
  },

}