import { OrderByParam } from './order-by.pipe';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  order = new OrderByParam();
  tableData = [
    { id: 1, name: '北海道', rand: 325 },
    { id: 2, name: '青森県', rand: 671 },
    { id: 3, name: '岩手県', rand: 69 },
    { id: 4, name: '宮城県', rand: 224 },
    { id: 5, name: '秋田県', rand: 509 },
    { id: 6, name: '山形県', rand: 998 },
    { id: 7, name: '福島県', rand: 55 },
    { id: 8, name: '茨城県', rand: 444 },
    { id: 9, name: '栃木県', rand: 848 },
    { id: 10, name: '群馬県', rand: 99 },
    { id: 11, name: '埼玉県', rand: 956 },
    { id: 12, name: '千葉県', rand: 722 },
    { id: 13, name: '東京都', rand: 748 },
    { id: 14, name: '神奈川県', rand: 187 },
    { id: 15, name: '新潟県', rand: 787 },
    { id: 16, name: '富山県', rand: 854 },
    { id: 17, name: '石川県', rand: 479 },
    { id: 18, name: '福井県', rand: 905 },
    { id: 19, name: '山梨県', rand: 614 },
    { id: 20, name: '長野県', rand: 198 },
    { id: 21, name: '岐阜県', rand: 802 },
    { id: 22, name: '静岡県', rand: 822 },
    { id: 23, name: '愛知県', rand: 80 },
    { id: 24, name: '三重県', rand: 505 },
    { id: 25, name: '滋賀県', rand: 789 },
    { id: 26, name: '京都府', rand: 906 },
    { id: 27, name: '大阪府', rand: 698 },
    { id: 28, name: '兵庫県', rand: 768 },
    { id: 29, name: '奈良県', rand: 313 },
    { id: 30, name: '和歌山県', rand: 609 },
    { id: 31, name: '鳥取県', rand: 856 },
    { id: 32, name: '島根県', rand: 730 },
    { id: 33, name: '岡山県', rand: 401 },
    { id: 34, name: '広島県', rand: 485 },
    { id: 35, name: '山口県', rand: 371 },
    { id: 36, name: '徳島県', rand: 544 },
    { id: 37, name: '香川県', rand: 421 },
    { id: 38, name: '愛媛県', rand: 513 },
    { id: 39, name: '高知県', rand: 757 },
    { id: 40, name: '福岡県', rand: 766 },
    { id: 41, name: '佐賀県', rand: 116 },
    { id: 42, name: '長崎県', rand: 82 },
    { id: 43, name: '熊本県', rand: 496 },
    { id: 44, name: '大分県', rand: 136 },
    { id: 45, name: '宮崎県', rand: 651 },
    { id: 46, name: '鹿児島県', rand: 722 },
    { id: 47, name: '沖縄県', rand: 477 },
  ];

  constructor() {
  }

  sort(column: string, orderBy: string) {
    this.order.set(column, orderBy);
  }
}
