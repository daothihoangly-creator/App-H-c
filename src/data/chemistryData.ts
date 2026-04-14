export type QuestionType = 'mcq' | 'true_false' | 'short_answer' | 'essay';

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Knowledge {
  section: string;
  points: string[];
}

export interface Topic {
  id: string;
  title: string;
  knowledge: Knowledge[];
  questions: Question[];
}

export const chemistryData: Topic[] = [
  {
    id: 'topic-1',
    title: 'Chủ đề 1: Biến đổi vật lí và biến đổi hóa học',
    knowledge: [
      {
        section: 'I. Biến đổi vật lí',
        points: [
          'Khi vật thể bị biến đổi về hình dạng, trạng thái, kích thước, … mà vẫn giữ nguyên chất ban đầu được gọi là biến đổi vật lí.',
          'Ví dụ: Biến đổi trạng thái của nước đá, thay đổi hình dạng của vật thể.'
        ]
      },
      {
        section: 'II. Biến đổi hóa học',
        points: [
          'Khi chất bị biến đổi tạo ra chất khác, được gọi là sự biến đổi hóa học.',
          'Ví dụ: Phản ứng giữa potassium ($K$) và nước, Calcium oxide ($CaO$) tác dụng với nước, Quang hợp ở cây xanh.'
        ]
      }
    ],
    questions: [
      {
        id: 'q1-1',
        type: 'mcq',
        text: 'Biến đổi hoá học là',
        options: [
          'A. sự biến đổi về trạng thái hay hình dạng của chất.',
          'B. sự thay đổi về thể tích của chất.',
          'C. sự biến đổi từ chất này thành chất mới.',
          'D. sự biến đổi từ dạng năng lượng này thành dạng năng lượng khác.'
        ],
        correctAnswer: 'C',
        explanation: 'Biến đổi hóa học là quá trình chất bị biến đổi tạo ra chất khác (chất mới).'
      },
      {
        id: 'q1-2',
        type: 'mcq',
        text: 'Dấu hiệu chính để phân biệt biến đổi vật lí và biến đổi hoá học là',
        options: [
          'A. sự thay đổi về màu sắc của chất.',
          'B. sự xuất hiện chất mới.',
          'C. sự thay đổi về trạng thái của chất.',
          'D. sự thay đổi về hình dạng của chất.'
        ],
        correctAnswer: 'B',
        explanation: 'Sự xuất hiện chất mới là dấu hiệu đặc trưng nhất của biến đổi hóa học.'
      },
      {
        id: 'q1-3',
        type: 'true_false',
        text: 'Cô cạn nước biển để lấy muối là biến đổi hoá học. (Đúng hay Sai?)',
        options: ['Đúng', 'Sai'],
        correctAnswer: 'Sai',
        explanation: 'Cô cạn nước biển chỉ là sự thay đổi trạng thái (nước bay hơi, muối kết tinh), không tạo ra chất mới nên là biến đổi vật lí.'
      }
    ]
  },
  {
    id: 'topic-2',
    title: 'Chủ đề 2: Phản ứng hoá học và năng lượng',
    knowledge: [
      {
        section: 'I. Phản ứng hoá học',
        points: [
          'Quá trình biến đổi chất này thành chất khác được gọi là phản ứng hoá học.',
          'Chất tham gia phản ứng gọi là chất đầu, chất mới tạo thành gọi là sản phẩm.',
          'Trong phản ứng hoá học, có sự phá vỡ liên kết cũ và hình thành liên kết mới.'
        ]
      },
      {
        section: 'II. Năng lượng trong phản ứng hoá học',
        points: [
          'Phản ứng toả nhiệt là phản ứng hoá học có sự giải phóng nhiệt năng ra môi trường.',
          'Phản ứng thu nhiệt là phản ứng hoá học có sự hấp thụ nhiệt năng từ môi trường.'
        ]
      }
    ],
    questions: [
      {
        id: 'q2-1',
        type: 'mcq',
        text: 'Làm thế nào để biết có phản ứng hoá học xảy ra?',
        options: [
          'A. Dựa vào mùi của sản phẩm.',
          'B. Dựa vào màu của sản phẩm.',
          'C. Dựa vào sự tỏa nhiệt.',
          'D. Dựa vào dấu hiệu có chất mới tạo thành.'
        ],
        correctAnswer: 'D',
        explanation: 'Dấu hiệu chắc chắn nhất của phản ứng hóa học là có chất mới tạo thành.'
      },
      {
        id: 'q2-2',
        type: 'mcq',
        text: 'Phản ứng tỏa nhiệt là phản ứng',
        options: [
          'A. giải phóng năng lượng dưới dạng nhiệt vào môi trường.',
          'B. hấp thụ năng lượng dưới dạng nhiệt từ môi trường.',
          'C. giải phóng năng lượng dưới dạng ánh sáng vào môi trường.',
          'D. hấp thụ năng lượng dưới dạng ánh sáng từ môi trường.'
        ],
        correctAnswer: 'A',
        explanation: 'Theo định nghĩa, phản ứng tỏa nhiệt giải phóng nhiệt năng ra môi trường.'
      }
    ]
  },
  {
    id: 'topic-3',
    title: 'Chủ đề 3: Định luật bảo toàn khối lượng - Phương trình hoá học',
    knowledge: [
      {
        section: 'I. Định luật bảo toàn khối lượng',
        points: [
          'Trong một phản ứng hoá học, tổng khối lượng của các chất sản phẩm bằng tổng khối lượng của các chất tham gia phản ứng.',
          'Phương trình: $m_A + m_B = m_C + m_D$'
        ]
      },
      {
        section: 'II. Phương trình hoá học',
        points: [
          'Phương trình hoá học biểu diễn phản ứng hoá học bằng công thức hoá học của các chất tham gia và chất sản phẩm.',
          'Các bước lập PTHH: Viết sơ đồ phản ứng -> Cân bằng số nguyên tử của mỗi nguyên tố -> Viết phương trình hoá học hoàn chỉnh.'
        ]
      }
    ],
    questions: [
      {
        id: 'q3-1',
        type: 'mcq',
        text: 'Cho phản ứng hóa học sau: $aA + bB \\rightarrow cC + dD$. Chọn đáp án đúng về định luật bảo toàn khối lượng?',
        options: [
          'A. $m_A + m_B = m_C + m_D$.',
          'B. $m_A + m_B > m_C + m_D$.',
          'C. $m_A + m_D = m_B + m_C$.',
          'D. $m_A + m_B < m_C + m_D$.'
        ],
        correctAnswer: 'A',
        explanation: 'Tổng khối lượng các chất tham gia (A, B) bằng tổng khối lượng các chất sản phẩm (C, D).'
      },
      {
        id: 'q3-2',
        type: 'true_false',
        text: 'Trong một phản ứng hoá học, số phân tử của mỗi chất luôn được bảo toàn. (Đúng hay Sai?)',
        options: ['Đúng', 'Sai'],
        correctAnswer: 'Sai',
        explanation: 'Trong phản ứng hóa học, số nguyên tử của mỗi nguyên tố được bảo toàn, còn số phân tử có thể thay đổi.'
      }
    ]
  },
  {
    id: 'topic-4',
    title: 'Chủ đề 4: Mol và tỉ khối của chất khí',
    knowledge: [
      {
        section: 'I. Mol và Khối lượng mol',
        points: [
          'Mol là lượng chất có chứa $6,022 \\times 10^{23}$ nguyên tử hay phân tử của chất đó (Số Avogadro $N_A$).',
          'Khối lượng mol (M) của một chất là khối lượng tính bằng gam của 1 mol chất đó (đơn vị: g/mol).'
        ]
      },
      {
        section: 'II. Thể tích mol chất khí và Tỉ khối',
        points: [
          'Thể tích mol chất khí ở điều kiện chuẩn (25°C, 1 bar) là 24,79 lít.',
          'Tỉ khối của khí A so với khí B: $d_{A/B} = \\frac{M_A}{M_B}$.'
        ]
      }
    ],
    questions: [
      {
        id: 'q4-1',
        type: 'mcq',
        text: '1 mol nước có chứa khoảng bao nhiêu phân tử nước?',
        options: [
          'A. $6.10^{23}$.',
          'B. $12.10^{23}$.',
          'C. $18.10^{23}$.',
          'D. $24.10^{23}$.'
        ],
        correctAnswer: 'A',
        explanation: '1 mol của bất kỳ chất nào cũng chứa khoảng $6,022 \\times 10^{23}$ hạt vi mô (phân tử/nguyên tử) của chất đó.'
      },
      {
        id: 'q4-2',
        type: 'short_answer',
        text: 'Công thức tính tỉ khối của khí A so với khí B là gì?',
        correctAnswer: '$d_{A/B} = \\frac{M_A}{M_B}$',
        explanation: 'Tỉ khối của khí A so với khí B là tỉ số giữa khối lượng mol của khí A và khối lượng mol của khí B.'
      }
    ]
  },
  {
    id: 'topic-5',
    title: 'Chủ đề 5: Tính theo phương trình hoá học',
    knowledge: [
      {
        section: 'I. Chất thiếu và chất dư',
        points: [
          'Chất tham gia phản ứng nào hết trước được gọi là chất thiếu.',
          'Chất tham gia phản ứng nào vẫn còn lại sau phản ứng gọi là chất dư.'
        ]
      },
      {
        section: 'II. Hiệu suất phản ứng',
        points: [
          'Hiệu suất phản ứng (H%) = (Lượng sản phẩm thực tế / Lượng sản phẩm lí thuyết) × 100%.',
          'Lượng lí thuyết được tính toán dựa trên phương trình hóa học giả sử phản ứng xảy ra hoàn toàn (100%).'
        ]
      }
    ],
    questions: [
      {
        id: 'q5-1',
        type: 'true_false',
        text: 'Một phản ứng hoàn toàn khi tất cả các chất tham gia đều phản ứng hết. (Đúng hay Sai?)',
        options: ['Đúng', 'Sai'],
        correctAnswer: 'Sai',
        explanation: 'Một phản ứng hoàn toàn khi có ÍT NHẤT một chất tham gia phản ứng hết. Các chất khác có thể dư.'
      },
      {
        id: 'q5-2',
        type: 'essay',
        text: 'Nêu các bước cơ bản để tính toán theo phương trình hóa học.',
        correctAnswer: '1. Viết PTHH. 2. Tính số mol chất đã biết. 3. Dựa vào PTHH tìm số mol chất cần tìm. 4. Chuyển đổi số mol thành khối lượng hoặc thể tích.',
        explanation: 'Đây là 4 bước tiêu chuẩn để giải các bài toán tính theo phương trình hóa học.'
      }
    ]
  },
  {
    id: 'topic-6',
    title: 'Chủ đề 6: Nồng độ dung dịch',
    knowledge: [
      {
        section: 'I. Dung dịch và Độ tan',
        points: [
          'Dung dịch là hỗn hợp đồng nhất của chất tan và dung môi.',
          'Độ tan (S) là số gam tối đa chất đó hoà tan trong 100 gam nước để tạo thành dung dịch bão hoà ở một nhiệt độ, áp suất xác định.'
        ]
      },
      {
        section: 'II. Nồng độ dung dịch',
        points: [
          'Nồng độ phần trăm ($C\\%$) = $\\frac{m_{ct}}{m_{dd}} \\times 100\\%$.',
          'Nồng độ mol ($C_M$) = $\\frac{n}{V_{dd}}$ (mol/L hoặc M).'
        ]
      }
    ],
    questions: [
      {
        id: 'q6-1',
        type: 'mcq',
        text: 'Nồng độ phần trăm là nồng độ cho biết:',
        options: [
          'A. Số gam chất tan có trong 100 gam dung dịch.',
          'B. Số gam chất tan có trong 100 gam dung dịch bão hoà.',
          'C. Số gam chất tan có trong 100 gam nước.',
          'D. Số gam chất tan có trong 1 lít dung dịch.'
        ],
        correctAnswer: 'A',
        explanation: 'Nồng độ phần trăm ($C\\%$) cho biết số gam chất tan có trong 100 gam dung dịch.'
      },
      {
        id: 'q6-2',
        type: 'mcq',
        text: 'Nồng độ mol/lít của dung dịch là',
        options: [
          'A. Số gam chất tan trong 1 lít dung dịch.',
          'B. Số gam chất tan trong 1 lít dung môi.',
          'C. Số mol chất tan trong 1 lít dung dịch.',
          'D. Số mol chất tan trong 1 lít dung môi.'
        ],
        correctAnswer: 'C',
        explanation: 'Nồng độ mol ($C_M$) là số mol chất tan có trong 1 lít dung dịch.'
      }
    ]
  },
  {
    id: 'topic-7',
    title: 'Chủ đề 7: Tốc độ phản ứng và chất xúc tác',
    knowledge: [
      {
        section: 'I. Tốc độ phản ứng',
        points: [
          'Tốc độ phản ứng là đại lượng chỉ mức độ nhanh hay chậm của một phản ứng hoá học.'
        ]
      },
      {
        section: 'II. Các yếu tố ảnh hưởng',
        points: [
          'Nồng độ: Tăng nồng độ chất phản ứng -> tốc độ tăng.',
          'Nhiệt độ: Tăng nhiệt độ -> tốc độ tăng.',
          'Diện tích tiếp xúc: Tăng diện tích tiếp xúc (nghiền nhỏ) -> tốc độ tăng.',
          'Chất xúc tác: Làm tăng tốc độ phản ứng nhưng không bị tiêu hao sau phản ứng.'
        ]
      }
    ],
    questions: [
      {
        id: 'q7-1',
        type: 'mcq',
        text: 'Yếu tố nào sau đây không ảnh hưởng đến tốc độ phản ứng?',
        options: [
          'A. Nồng độ chất phản ứng.',
          'B. Chất xúc tác.',
          'C. Nồng độ sản phẩm.',
          'D. Nhiệt độ.'
        ],
        correctAnswer: 'C',
        explanation: 'Nồng độ sản phẩm không phải là yếu tố chính ảnh hưởng đến tốc độ phản ứng thuận trong các yếu tố cơ bản được học.'
      },
      {
        id: 'q7-2',
        type: 'true_false',
        text: 'Chất xúc tác bị biến đổi về lượng và chất sau khi phản ứng kết thúc. (Đúng hay Sai?)',
        options: ['Đúng', 'Sai'],
        correctAnswer: 'Sai',
        explanation: 'Chất xúc tác làm tăng tốc độ phản ứng nhưng vẫn được bảo toàn về chất và lượng khi kết thúc phản ứng.'
      }
    ]
  },
  {
    id: 'topic-8',
    title: 'Chủ đề 8: Acid',
    knowledge: [
      {
        section: 'I. Khái niệm acid',
        points: [
          'Acid là những hợp chất trong phân tử có nguyên tử hydrogen liên kết với gốc acid.',
          'Khi tan trong nước, acid tạo ra ion $H^+$.'
        ]
      },
      {
        section: 'II. Tính chất hoá học',
        points: [
          'Làm đổi màu quỳ tím sang đỏ.',
          'Tác dụng với nhiều kim loại (trừ $Cu$, $Ag$, $Au$...) tạo muối và giải phóng khí $H_2$.',
          'Tác dụng với base tạo thành muối và nước (phản ứng trung hòa).'
        ]
      }
    ],
    questions: [
      {
        id: 'q8-1',
        type: 'mcq',
        text: 'Acid là những chất làm cho quỳ tím chuyển sang màu nào trong số các màu sau đây?',
        options: [
          'A. Xanh.',
          'B. Đỏ.',
          'C. Tím.',
          'D. Vàng.'
        ],
        correctAnswer: 'B',
        explanation: 'Dung dịch acid làm đổi màu quỳ tím sang đỏ.'
      },
      {
        id: 'q8-2',
        type: 'mcq',
        text: 'Chất nào sau đây không phản ứng với sắt?',
        options: [
          'A. $NaCl$.',
          'B. $CH_3COOH$.',
          'C. $H_2SO_4$.',
          'D. $HCl$.'
        ],
        correctAnswer: 'A',
        explanation: '$NaCl$ là muối, không phản ứng với sắt trong điều kiện thường. Các chất còn lại là acid, có thể phản ứng với sắt.'
      }
    ]
  },
  {
    id: 'topic-9',
    title: 'Chủ đề 9: Base',
    knowledge: [
      {
        section: 'I. Khái niệm base',
        points: [
          'Base là hợp chất mà phân tử có một nguyên tử kim loại liên kết với một hay nhiều nhóm hydroxide ($OH^-$).',
          'Khi tan trong nước, phân tử base sẽ tạo ra ion $OH^-$.'
        ]
      },
      {
        section: 'II. Tính chất hoá học',
        points: [
          'Làm đổi màu quỳ tím thành xanh, phenolphthalein không màu thành hồng.',
          'Tác dụng với acid tạo thành muối và nước (phản ứng trung hoà).',
          'Base không tan bị nhiệt phân hủy thành oxide tương ứng và nước.'
        ]
      }
    ],
    questions: [
      {
        id: 'q9-1',
        type: 'mcq',
        text: 'Dung dịch nào sau đây làm đổi màu quỳ tím thành xanh?',
        options: [
          'A. Potassium hydroxide.',
          'B. Acetic acid.',
          'C. Nước.',
          'D. Sodium chloride.'
        ],
        correctAnswer: 'A',
        explanation: 'Potassium hydroxide ($KOH$) là một base (kiềm) nên làm quỳ tím hóa xanh.'
      },
      {
        id: 'q9-2',
        type: 'short_answer',
        text: 'Phản ứng giữa acid và base được gọi là phản ứng gì?',
        correctAnswer: 'Phản ứng trung hòa',
        explanation: 'Phản ứng giữa acid và base tạo ra muối và nước được gọi là phản ứng trung hòa.'
      }
    ]
  },
  {
    id: 'topic-10',
    title: 'Chủ đề 10: Thang pH',
    knowledge: [
      {
        section: 'I. Thang pH',
        points: [
          'Thang pH là một tập hợp các con số có giá trị từ 1 – 14.',
          'pH < 7: môi trường acid; pH = 7: môi trường trung tính; pH > 7: môi trường base.'
        ]
      },
      {
        section: 'II. Ý nghĩa của pH',
        points: [
          'pH của môi trường có ảnh hưởng đến đời sống của con người và các loài động, thực vật.',
          'Dạ dày có pH < 7 (tính acid mạnh) giúp tiêu hóa thức ăn.'
        ]
      }
    ],
    questions: [
      {
        id: 'q10-1',
        type: 'mcq',
        text: 'Nếu pH < 7 thì dung dịch có môi trường:',
        options: [
          'A. Acid.',
          'B. Base.',
          'C. Muối.',
          'D. Trung tính.'
        ],
        correctAnswer: 'A',
        explanation: 'Theo thang pH, dung dịch có pH < 7 có môi trường acid.'
      },
      {
        id: 'q10-2',
        type: 'true_false',
        text: 'Dung dịch $NaOH$ có pH nhỏ hơn 7. (Đúng hay Sai?)',
        options: ['Đúng', 'Sai'],
        correctAnswer: 'Sai',
        explanation: '$NaOH$ là một base mạnh nên dung dịch của nó có pH > 7.'
      }
    ]
  },
  {
    id: 'topic-11',
    title: 'Chủ đề 11: Oxide',
    knowledge: [
      {
        section: 'I. Khái niệm oxide',
        points: [
          'Oxide là hợp chất gồm 2 nguyên tố, trong đó có nguyên tố oxygen.',
          'Công thức hóa học chung của oxide là $M_xO_y$.'
        ]
      },
      {
        section: 'II. Phân loại và Tính chất',
        points: [
          'Oxide base: Tác dụng với acid tạo muối và nước (VD: $CuO$, $Fe_2O_3$).',
          'Oxide acid: Tác dụng với base tạo muối và nước (VD: $CO_2$, $SO_2$).',
          'Oxide lưỡng tính: Tác dụng được với cả acid và base (VD: $Al_2O_3$, $ZnO$).',
          'Oxide trung tính: Không tác dụng với acid, base, nước (VD: $CO$, $NO$).'
        ]
      }
    ],
    questions: [
      {
        id: 'q11-1',
        type: 'mcq',
        text: 'Chất nào sau đây là oxide base?',
        options: [
          'A. $CO_2$.',
          'B. $CaO$.',
          'C. $SO_3$.',
          'D. $Ba(OH)_2$.'
        ],
        correctAnswer: 'B',
        explanation: '$CaO$ là oxide của kim loại $Ca$ và tương ứng với base $Ca(OH)_2$ nên nó là oxide base.'
      },
      {
        id: 'q11-2',
        type: 'mcq',
        text: 'Chất nào sau đây là oxide lưỡng tính?',
        options: [
          'A. $Fe_2O_3$.',
          'B. $CaO$.',
          'C. $SO_3$.',
          'D. $Al_2O_3$.'
        ],
        correctAnswer: 'D',
        explanation: '$Al_2O_3$ là oxide lưỡng tính vì nó có thể tác dụng với cả dung dịch acid và dung dịch base.'
      }
    ]
  },
  {
    id: 'topic-12',
    title: 'Chủ đề 12: Muối',
    knowledge: [
      {
        section: 'I. Khái niệm muối',
        points: [
          'Muối là hợp chất được tạo ra khi thay thế ion $H^+$ trong acid bằng ion kim loại hoặc ion ammonium ($NH_4^+$).'
        ]
      },
      {
        section: 'II. Tính chất hoá học',
        points: [
          'Tác dụng với kim loại: Kim loại mạnh đẩy kim loại yếu ra khỏi dung dịch muối.',
          'Tác dụng với acid: Tạo ra muối mới và acid mới.',
          'Tác dụng với base: Tạo ra muối mới và base mới.',
          'Tác dụng với muối: Tạo ra hai muối mới (điều kiện có chất kết tủa).'
        ]
      }
    ],
    questions: [
      {
        id: 'q12-1',
        type: 'mcq',
        text: 'Dung dịch muối nào sau đây tác dụng với dung dịch $NaOH$ tạo ra kết tủa?',
        options: [
          'A. $FeCl_3$.',
          'B. $BaCl_2$.',
          'C. $NaNO_3$.',
          'D. $K_2SO_4$.'
        ],
        correctAnswer: 'A',
        explanation: '$FeCl_3 + 3NaOH \\rightarrow Fe(OH)_3 \\downarrow \\text{(nâu đỏ)} + 3NaCl$.'
      },
      {
        id: 'q12-2',
        type: 'essay',
        text: 'Điều kiện để phản ứng giữa hai dung dịch muối xảy ra là gì?',
        correctAnswer: 'Sản phẩm tạo thành phải có ít nhất một chất không tan (chất kết tủa).',
        explanation: 'Phản ứng trao đổi ion trong dung dịch chỉ xảy ra khi tạo thành chất kết tủa, chất khí hoặc chất điện li yếu (như nước).'
      }
    ]
  },
  {
    id: 'topic-13',
    title: 'Chủ đề 13: Phân bón hoá học',
    knowledge: [
      {
        section: 'I. Vai trò của phân bón',
        points: [
          'Phân bón hoá học là hợp chất chứa các nguyên tố dinh dưỡng được dùng để bổ sung cho cây trồng.',
          'Gồm 3 loại nguyên tố dinh dưỡng: đa lượng ($N$, $P$, $K$), trung lượng ($Ca$, $Mg$, $S$) và vi lượng ($Fe$, $Cu$, $Mn$...).'
        ]
      },
      {
        section: 'II. Các loại phân bón chính',
        points: [
          'Phân đạm: Cung cấp Nitrogen (N), giúp cây phát triển nhanh, tăng năng suất.',
          'Phân lân: Cung cấp Phosphorus (P), thúc đẩy ra rễ, tạo nhánh, phân cành.',
          'Phân kali: Cung cấp Potassium (K), thúc đẩy tạo chất đường, xơ, tăng sức chống rét, sâu bệnh.',
          'Phân N-P-K: Phân hỗn hợp chứa cả 3 nguyên tố N, P, K.'
        ]
      }
    ],
    questions: [
      {
        id: 'q13-1',
        type: 'mcq',
        text: 'Chất nào sau đây trong phân đạm, cung cấp nguyên tố đa lượng cho cây trồng?',
        options: [
          'A. $NaCl$.',
          'B. $NaNO_3$.',
          'C. $Na_2SO_4$.',
          'D. $CaSO_4$.'
        ],
        correctAnswer: 'B',
        explanation: '$NaNO_3$ (Sodium nitrate) là một loại phân đạm cung cấp nguyên tố Nitrogen ($N$).'
      },
      {
        id: 'q13-2',
        type: 'mcq',
        text: 'Loại phân bón nào sau đây cung cấp cho cây trồng cả ba thành phần dinh dưỡng: nitrogen, phosphorus và potassium?',
        options: [
          'A. Phân đạm.',
          'B. Phân kali.',
          'C. Phân NPK.',
          'D. Phân lân.'
        ],
        correctAnswer: 'C',
        explanation: 'Phân NPK là phân hỗn hợp chứa cả 3 nguyên tố đa lượng N, P, K.'
      }
    ]
  }
];
