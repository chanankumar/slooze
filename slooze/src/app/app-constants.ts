export const constants = {
    SUPABASE_URL : 'https://xiesjsywmcoknkruuzbg.supabase.co',
    SUPABASE_ANON_KEY : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpZXNqc3l3bWNva25rcnV1emJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4NDA2NjMsImV4cCI6MjA2MzQxNjY2M30.MEUyff516z_JgOnvRe8J_-73_nNym6-CnZmpHkWkI_M',
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

}