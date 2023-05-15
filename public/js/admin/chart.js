let ElementLoaithongke = document.getElementById('loaithongke');
ElementLoaithongke.addEventListener('change', e => {
  document.getElementById('loai_1').style.display = 'none';
  document.getElementById('loai_2').style.display = 'none';
  document.getElementById('loai_3').style.display = 'none';
  document.getElementById('loai_4').style.display = 'none';

  document.getElementById('barChart').style.display = 'none';
  document.getElementById('table-soluong').style.display = 'none';

  let loaithongke = ElementLoaithongke.value;
  switch (loaithongke) {
    case '1':
      document.getElementById('loai_1').style.display = 'inline-block';
      break;
    case '2':
      document.getElementById('loai_2').style.display = 'inline-block';
      break;
    case '3':
      document.getElementById('loai_3').style.display = 'inline-block';
      break;
    case '4':
      document.getElementById('loai_4').style.display = 'inline-block';
      break;
  }
});

function drawChart(labels, data, label) {
  document.getElementById('barChart').style.display = 'block';
  let backgroundColor = [];
    let borderColor = [];
    for (value of labels) {
      backgroundColor.push('rgba(255, 159, 64, 0.2)');
      borderColor.push('rgba(255,99,132,1)');
    }

    var data = {
      labels: labels,
      datasets: [{
        label: label,
        data: data,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
        fill: false
      }]
    };
    var options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            color: "rgba(204, 204, 204,0.1)"
          }
        }],
        xAxes: [{
          gridLines: {
            color: "rgba(204, 204, 204,0.1)"
          }
        }]
      },
      legend: {
        display: false
      },
      elements: {
        point: {
          radius: 0
        }
      }
    };
    if ($("#barChart").length) {
      var barChartCanvas = $("#barChart").get(0).getContext("2d");
      // This will get the first returned node in the jQuery collection.
      var barChart = new Chart(barChartCanvas, {
        type: 'bar',
        data: data,
        options: options
      });
    }
}

// vẽ biểu đồ số đơn hàng đã bán trong khung thời gian
let ELementSubmitDateChart = document.getElementById('submitDateChart');
ELementSubmitDateChart.addEventListener('click', e => {
  document.getElementById('barChart').remove();
  document.getElementById('show-chart').innerHTML += '<canvas id="barChart" style="display: none"></canvas>';
  let ngaybatdau = document.getElementById('ngaybatdau').value;
  let ngayketthuc = document.getElementById('ngayketthuc').value;

  document.getElementById('barChart').style.display = 'none';
  document.getElementById('table-soluong').style.display = 'none';

  axios.get('/get-date-chart', {
    params: {
      ngaybatdau: ngaybatdau,
      ngayketthuc: ngayketthuc
    }
  })
  .then((response) => {
    let labels = Object.keys(response.data.data);
    let data = Object.values(response.data.data);

    drawChart(labels, data, 'Tổng đơn hàng');
  })
})

// vẽ bảng số lượng sách còn lại trong kho nhỏ hơn giá trị cho trước
let ELementSubmitMinVolume = document.getElementById('submitMinVolume');
ELementSubmitMinVolume.addEventListener('click', e => {
  document.getElementById('barChart').remove();
  document.getElementById('show-chart').innerHTML += '<canvas id="barChart" style="display: none"></canvas>';
  let soluong = document.getElementById('soluongtoithieu').value;

  document.getElementById('barChart').style.display = 'none';
  document.getElementById('table-soluong').style.display = 'none';

  axios.get('/get-min-volume', {
    params: {
      soluong: soluong
    }
  })
  .then((response) => {
    document.getElementById('table-soluong').style.display = 'block';
    document.getElementById('body-table-soluong').innerHTML = response.data.div;
  })
})

// vẽ biểu đồ các số điện thoại boom hàng nhiều nhất
let ELementSubmitMaxCancleOrder = document.getElementById('submitMaxCancleOrder');
ELementSubmitMaxCancleOrder.addEventListener('click', e => {
  document.getElementById('barChart').remove();
  document.getElementById('show-chart').innerHTML += '<canvas id="barChart" style="display: none"></canvas>';
  let ngaybatdau = document.getElementById('ngaybatdauSDT').value;
  let ngayketthuc = document.getElementById('ngayketthucSDT').value;

  document.getElementById('barChart').style.display = 'none';
  document.getElementById('table-soluong').style.display = 'none';

  axios.get('/get-max-cancle-order', {
    params: {
      ngaybatdau: ngaybatdau,
      ngayketthuc: ngayketthuc
    }
  })
  .then((response) => {
    let labels = Object.keys(response.data.data);
    let data = Object.values(response.data.data);

    drawChart(labels, data, 'Số lượng đơn đã hủy');
  })
})

// vẽ biểu đồ doanh thu theo thể loại
let ELementSubmitAvenueByGenre = document.getElementById('submitAvenueByGenre');
ELementSubmitAvenueByGenre.addEventListener('click', e => {
  document.getElementById('barChart').remove();
  document.getElementById('show-chart').innerHTML += '<canvas id="barChart" style="display: none"></canvas>';
  let ngaybatdau = document.getElementById('ngaybatdauDoanhthu').value;
  let ngayketthuc = document.getElementById('ngayketthucDoanhthu').value;

  document.getElementById('barChart').style.display = 'none';
  document.getElementById('table-soluong').style.display = 'none';

  axios.get('/get-avenue-by-genre', {
    params: {
      ngaybatdau: ngaybatdau,
      ngayketthuc: ngayketthuc
    }
  })
  .then((response) => {
    let labels = Object.keys(response.data.data);
    let data = Object.values(response.data.data);

    drawChart(labels, data, 'Doanh thu');
  })
})
