javascript
window.ENSTP_DATA = window.ENSTP_DATA || {};

window.ENSTP_DATA.groups = {
window.ENSTP_DATA = window.ENSTP_DATA || {};

window.ENSTP_DATA.groups = {
  'prep_1': Array.from({length: 12}, (_, i) => ({ value: `g${i+1}`, label: `الفوج ${i+1}` })),
      'prep_1': Array.from({length: 12}, (_, i) => ({ value: `g${i+1}`, label: `الفوج ${i+1}` })),
      'prep_2': Array.from({length: 12}, (_, i) => ({ value: `g${i+1}`, label: `الفوج ${i+1}` })),
      'dib_1': Array.from({length: 4}, (_, i) => ({ value: `g${i+1}`, label: `الفوج ${i+1}` })),
      'dib_2': Array.from({length: 4}, (_, i) => ({ value: `g${i+1}`, label: `الفوج ${i+1}` })),
      'dib_3': [{ value: 'promo', label: 'الدفعة كاملة (Promo)' }],
      'dms_1': Array.from({length: 4}, (_, i) => ({ value: `sec${i+1}`, label: `Section ${i+1}` })),
      'dms_2': Array.from({length: 2}, (_, i) => ({ value: `sec${i+1}`, label: `Section ${i+1}` })),
      'dms_3': [{ value: 'promo', label: 'الدفعة كاملة (Promo)' }]
    };

    // 2. قاعدة بيانات استعمال الزمن
   window.ENSTP_DATA.schedule = {
      // ==========================================
      // 1CP - Groupes 1 à 12
      // ==========================================
      'prep_1': {
        'g1': {
          'Saturday': [
            { time: '08:00 - 09:30', subject: 'Computer Science 1 (TD)', prof: '---', room: 'Room 3', type: 'TD' },
            { time: '09:35 - 11:05', subject: 'Physics 1 (TD)', prof: '---', room: 'Room 3', type: 'TD' },
            { time: '11:10 - 12:40', subject: 'Lab(Chem/Phys/Tech Draw)', prof: '---', room: 'labo', type: 'TP' },
            { time: '13:30 - 15:00', subject: 'Algebra 1 (Cours)', prof: 'Mr Makhl...', room: 'Auditorium A', type: 'Cours' },
            { time: '15:05 - 16:35', subject: 'French 1', prof: 'Mme Belhadj', room: 'Auditorium A', type: 'Cours' }
          ],
          'Sunday': [
            { time: '08:00 - 09:30', subject: 'Proba 1 (TD)', prof: '---', room: 'Room 10', type: 'TD' },
            { time: '09:35 - 11:05', subject: 'Algebra 1 (TD)', prof: '---', room: 'Room 10', type: 'TD' },
            { time: '11:10 - 12:40', subject: 'Calculus 1', prof: '---', room: 'Room 10', type: 'TD' },
            { time: '13:30 - 15:00', subject: 'Chemistry 1', prof: '---', room: 'Room 10', type: 'TD' },
            { time: '15:05 - 16:35', subject: 'Lab(Chem/Phys/Tech Draw)', prof: '---', room: 'Laboratories 1', type: 'TP' }
          ],
          'Monday': [
            { time: '08:00 - 09:30', subject: 'Proba stat (Cours)', prof: 'Mme Masrour', room: 'Auditorium B', type: 'Cours' },
            { time: '09:35 - 11:05', subject: 'Chemistry 1 (Cours)', prof: 'Mrs Benaissa', room: 'Auditorium B', type: 'Cours' },
            { time: '13:30 - 15:00', subject: 'Computer Science 1 (Cours)', prof: 'Mme Bader', room: 'Auditorium B', type: 'Cours' },
            { time: '15:05 - 16:35', subject: 'تاريخ الجزائر', prof: '---', room: 'Auditorium B', type: 'Cours' }
          ],
          'Tuesday': [
            { time: '08:00 - 12:40', subject: 'Lab(Chem/Phys/Tech Draw)', prof: '---', room: 'Laboratories 1', type: 'TP' },
            { time: '13:30 - 15:00', subject: 'Calculus 1 (Cours)', prof: 'Mrs Kechiche', room: 'Auditorium A', type: 'Cours' },
            { time: '15:05 - 16:35', subject: 'Physics 1 (Cours)', prof: 'Mr Haddouche', room: 'Auditorium A', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08:00 - 12:40', subject: 'Lab(Chem/Phys/Tech Draw)', prof: '---', room: 'Laboratories 1 & 3', type: 'TP' },
            { time: '13:30 - 16:35', subject: 'Lab(Chem/Phys/Tech Draw)', prof: '---', room: 'Laboratories 11', type: 'TP' }
          ],
          'Thursday': [
            { time: '08:00 - 09:30', subject: 'Physics 1 (Cours)', prof: 'Mr Haddouche', room: 'Auditorium A', type: 'Cours' },
            { time: '09:35 - 11:05', subject: 'Calculus 1 (Cours)', prof: 'Mrs Kechiche', room: 'Auditorium A', type: 'Cours' },
            { time: '11:10 - 12:40', subject: 'English 1', prof: 'Mr Yalla', room: 'Auditorium B', type: 'TD' }
          ]
        },
        'g2': {
          'Saturday': [
            { time: '08:00 - 09:30', subject: 'Proba 1 (TD)', prof: '---', room: 'Room 4', type: 'TD' },
            { time: '09:35 - 11:05', subject: 'Computer Science 1 (TD)', prof: '---', room: 'Room 4', type: 'TD' },
            { time: '11:10 - 12:40', subject: 'Physics 1 (TD)', prof: '---', room: 'Room 4', type: 'TD' },
            { time: '13:30 - 15:00', subject: 'Algebra 1 (Cours)', prof: 'Mr Makhl...', room: 'Auditorium A', type: 'Cours' },
            { time: '15:05 - 16:35', subject: 'French 1', prof: 'Mme Belhadj', room: 'Auditorium A', type: 'Cours' }
          ],
          'Sunday': [
            { time: '08:00 - 09:30', subject: 'Algebra 1 (TD)', prof: '---', room: 'Room 11', type: 'TD' },
            { time: '09:35 - 11:05', subject: 'Calculus 1 (TD)', prof: '---', room: 'Room 9', type: 'TD' },
            { time: '11:10 - 12:40', subject: 'Chemistry 1', prof: '---', room: 'Room 9', type: 'TD' },
            { time: '13:30 - 16:35', subject: 'Lab(Chem/Phys/Tech Draw)', prof: '---', room: 'Laboratories 2', type: 'TP' }
          ],
          'Monday': [
            { time: '08:00 - 09:30', subject: 'Proba stat (Cours)', prof: 'Mme Masrour', room: 'Auditorium B', type: 'Cours' },
            { time: '09:35 - 11:05', subject: 'Chemistry 1 (Cours)', prof: 'Mrs Benaissa', room: 'Auditorium B', type: 'Cours' },
            { time: '13:30 - 15:00', subject: 'Computer Science 1 (Cours)', prof: 'Mme Bader', room: 'Auditorium B', type: 'Cours' },
            { time: '15:05 - 16:35', subject: 'تاريخ الجزائر', prof: '---', room: 'Auditorium B', type: 'Cours' }
          ],
          'Tuesday': [
            { time: '08:00 - 12:40', subject: 'Lab(Chem/Phys/Tech Draw)', prof: '---', room: 'Laboratories 2', type: 'TP' },
            { time: '13:30 - 15:00', subject: 'Calculus 1 (Cours)', prof: 'Mrs Kechiche', room: 'Auditorium A', type: 'Cours' },
            { time: '15:05 - 16:35', subject: 'Physics 1 (Cours)', prof: 'Mr Haddouche', room: 'Auditorium A', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08:00 - 12:40', subject: 'Lab(Chem/Phys/Tech Draw)', prof: '---', room: 'Laboratories 2', type: 'TP' },
            { time: '13:30 - 16:35', subject: 'Lab(Chem/Phys/Tech Draw)', prof: '---', room: 'Laboratories 11', type: 'TP' }
          ],
          'Thursday': [
            { time: '08:00 - 09:30', subject: 'Physics 1 (Cours)', prof: 'Mr Haddouche', room: 'Auditorium A', type: 'Cours' },
            { time: '09:35 - 11:05', subject: 'Calculus 1 (Cours)', prof: 'Mrs Kechiche', room: 'Auditorium A', type: 'Cours' },
            { time: '11:10 - 12:40', subject: 'English 1', prof: 'Mlle Yalla', room: 'Auditorium B', type: 'TD' }
          ]
        },
        'g3': {
          'Saturday': [
            { time: '08:00 - 09:30', subject: 'Physics 1 (TD)', prof: '---', room: 'Room 5', type: 'TD' },
            { time: '09:35 - 11:05', subject: 'Proba 1 (TD)', prof: '---', room: 'Room 5', type: 'TD' },
            { time: '11:10 - 12:40', subject: 'Computer Science 1 (TD)', prof: '---', room: 'Room 5', type: 'TD' },
            { time: '13:30 - 15:00', subject: 'Algebra 1 (Cours)', prof: 'Mr Makhl...', room: 'Auditorium A', type: 'Cours' },
            { time: '15:05 - 16:35', subject: 'French 1', prof: 'Mme Belhadj', room: 'Auditorium A', type: 'Cours' }
          ],
          'Sunday': [
            { time: '08:00 - 09:30', subject: 'Algebra 1 (TD)', prof: '---', room: 'Room 12', type: 'TD' },
            { time: '09:35 - 11:05', subject: 'Chemistry 1 (TD)', prof: '---', room: 'Room 12', type: 'TD' },
            { time: '13:30 - 15:00', subject: 'Calculus 1', prof: '---', room: 'Room 11', type: 'TD' },
            { time: '15:05 - 16:35', subject: 'Lab(Chem/Phys/Tech Draw)', prof: '---', room: 'Laboratories 2', type: 'TP' }
          ],
          'Monday': [
            { time: '08:00 - 09:30', subject: 'Proba stat (Cours)', prof: 'Mme Masrour', room: 'Auditorium B', type: 'Cours' },
            { time: '09:35 - 11:05', subject: 'Chemistry 1 (Cours)', prof: 'Mrs Benaissa', room: 'Auditorium B', type: 'Cours' },
            { time: '13:30 - 15:00', subject: 'Computer Science 1 (Cours)', prof: 'Mme Bader', room: 'Auditorium B', type: 'Cours' },
            { time: '15:05 - 16:35', subject: 'تاريخ الجزائر', prof: '---', room: 'Auditorium B', type: 'Cours' }
          ],
          'Tuesday': [
            { time: '08:00 - 12:40', subject: 'Lab(Chem/Phys/Tech Draw)', prof: '---', room: 'Laboratories 2', type: 'TP' },
            { time: '13:30 - 15:00', subject: 'Calculus 1 (Cours)', prof: 'Mrs Kechiche', room: 'Auditorium A', type: 'Cours' },
            { time: '15:05 - 16:35', subject: 'Physics 1 (Cours)', prof: 'Mr Haddouche', room: 'Auditorium A', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08:00 - 12:40', subject: 'Lab(Chem/Phys/Tech Draw)', prof: '---', room: 'Laboratories 2', type: 'TP' },
            { time: '13:30 - 16:35', subject: 'Lab(Chem/Phys/Tech Draw)', prof: '---', room: 'Laboratories 11', type: 'TP' }
          ],
          'Thursday': [
            { time: '08:00 - 09:30', subject: 'Physics 1 (Cours)', prof: 'Mr Haddouche', room: 'Auditorium A', type: 'Cours' },
            { time: '09:35 - 11:05', subject: 'Calculus 1 (Cours)', prof: 'Mrs Kechiche', room: 'Auditorium A', type: 'Cours' },
            { time: '11:10 - 12:40', subject: 'English 1', prof: 'Mr Yalla', room: 'Auditorium B', type: 'TD' }
          ]
        },
        'g4': {
          'Saturday': [
            { time: '08:00 - 09:30', subject: 'Algebra 1 (TD)', prof: '---', room: 'Room 6', type: 'TD' },
            { time: '09:35 - 11:05', subject: 'Physics 1 (TD)', prof: '---', room: 'Room 6', type: 'TD' },
            { time: '11:10 - 12:40', subject: 'Proba 1 (TD)', prof: '---', room: 'Room 6', type: 'TD' },
            { time: '13:30 - 15:00', subject: 'Algebra 1 (Cours)', prof: 'Mr Makhfi...', room: 'Auditorium A', type: 'Cours' },
            { time: '15:05 - 16:35', subject: 'French 1', prof: 'Mme Belhadj', room: 'Auditorium A', type: 'Cours' }
          ],
          'Sunday': [
            { time: '08:00 - 12:40', subject: 'Lab(Chem/Phys/Tech Draw)', prof: '---', room: 'Laboratories 2', type: 'TP' },
            { time: '13:30 - 16:35', subject: 'Lab(Chem/Phys/Tech Draw)', prof: '---', room: 'Laboratories 11', type: 'TP' }
          ],
          'Monday': [
            { time: '08:00 - 09:30', subject: 'Proba stat (Cours)', prof: 'Mme Masrour', room: 'Auditorium B', type: 'Cours' },
            { time: '09:35 - 11:05', subject: 'Chemistry 1 (Cours)', prof: 'Mrs Benaissa', room: 'Auditorium B', type: 'Cours' },
            { time: '13:30 - 15:00', subject: 'Computer Science 1 (Cours)', prof: 'Mme Bader', room: 'Auditorium B', type: 'Cours' },
            { time: '15:05 - 16:35', subject: 'تاريخ الجزائر', prof: '---', room: 'Auditorium B', type: 'Cours' }
          ],
          'Tuesday': [
            { time: '08:00 - 12:40', subject: 'Lab(Chem/Phys/Tech Draw)', prof: '---', room: 'Laboratories 2', type: 'TP' },
            { time: '13:30 - 15:00', subject: 'Calculus 1 (Cours)', prof: 'Mrs Kechiche', room: 'Auditorium A', type: 'Cours' },
            { time: '15:05 - 16:35', subject: 'Physics 1 (Cours)', prof: 'Mr Haddouche', room: 'Auditorium A', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '09:35 - 11:05', subject: 'Computer Science 1 (TD)', prof: '---', room: 'Room 3', type: 'TD' },
            { time: '11:10 - 12:40', subject: 'Chemistry 1', prof: '---', room: 'Room 3', type: 'TD' },
            { time: '13:30 - 15:00', subject: 'Calculus 1', prof: '---', room: 'Room 4', type: 'TD' }
          ],
          'Thursday': [
            { time: '08:00 - 09:30', subject: 'Physics 1 (Cours)', prof: 'Mr Haddouche', room: 'Auditorium A', type: 'Cours' },
            { time: '09:35 - 11:05', subject: 'Calculus 1 (Cours)', prof: 'Mrs Kechiche', room: 'Auditorium A', type: 'Cours' },
            { time: '11:10 - 12:40', subject: 'English 1', prof: 'Mlle Khalfi', room: 'Room 22', type: 'TD' }
          ]
        },
        'g5': {
          'Saturday': [
            { time: '08:00 - 09:30', subject: 'Physics 1 (TD)', prof: '---', room: 'Room 7', type: 'TD' },
            { time: '09:35 - 11:05', subject: 'Proba 1 (TD)', prof: '---', room: 'Room 7', type: 'TD' },
            { time: '11:10 - 12:40', subject: 'Algebra 1 (TD)', prof: '---', room: 'Room 7', type: 'TD' },
            { time: '13:30 - 15:00', subject: 'Algebra 1 (Cours)', prof: 'Mr Makhfi...', room: 'Auditorium A', type: 'Cours' },
            { time: '15:05 - 16:35', subject: 'French 1', prof: 'Mme Belhadj', room: 'Auditorium A', type: 'Cours' }
          ],
          'Sunday': [
            { time: '08:00 - 12:40', subject: 'Lab(Chem/Phys/Tech Draw)', prof: '---', room: 'Laboratories 2', type: 'TP' },
            { time: '13:30 - 16:35', subject: 'Lab(Chem/Phys/Tech Draw)', prof: '---', room: 'Laboratories 11', type: 'TP' }
          ],
          'Monday': [
            { time: '08:00 - 09:30', subject: 'Proba stat (Cours)', prof: 'Mme Masrour', room: 'Auditorium B', type: 'Cours' },
            { time: '09:35 - 11:05', subject: 'Chemistry 1 (Cours)', prof: 'Mrs Benaissa', room: 'Auditorium B', type: 'Cours' },
            { time: '13:30 - 15:00', subject: 'Computer Science 1 (Cours)', prof: 'Mme Bader', room: 'Auditorium B', type: 'Cours' },
            { time: '15:05 - 16:35', subject: 'تاريخ الجزائر', prof: '---', room: 'Auditorium B', type: 'Cours' }
          ],
          'Tuesday': [
            { time: '08:00 - 12:40', subject: 'Lab(Chem/Phys/Tech Draw)', prof: '---', room: 'Laboratories 2', type: 'TP' },
            { time: '13:30 - 15:00', subject: 'Calculus 1 (Cours)', prof: 'Mrs Kechiche', room: 'Auditorium A', type: 'Cours' },
            { time: '15:05 - 16:35', subject: 'Physics 1 (Cours)', prof: 'Mr Haddouche', room: 'Auditorium A', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08:00 - 09:30', subject: 'Computer Science 1 (TD)', prof: '---', room: 'Room 4', type: 'TD' },
            { time: '09:35 - 11:05', subject: 'Chemistry 1 (TD)', prof: '---', room: 'Room 4', type: 'TD' },
            { time: '11:10 - 12:40', subject: 'Calculus 1', prof: '---', room: 'Room 10', type: 'TD' }
          ],
          'Thursday': [
            { time: '08:00 - 09:30', subject: 'Physics 1 (Cours)', prof: 'Mr Haddouche', room: 'Auditorium A', type: 'Cours' },
            { time: '09:35 - 11:05', subject: 'Calculus 1 (Cours)', prof: 'Mrs Kechiche', room: 'Auditorium A', type: 'Cours' },
            { time: '11:10 - 12:40', subject: 'English 1', prof: 'Mlle Khalfi', room: 'Room 22', type: 'TD' }
          ]
        },
        'g6': {
          'Saturday': [
            { time: '08h00 - 09h30', subject: 'Proba 1 (TD)', prof: '---', room: 'Room 8', type: 'TD' },
            { time: '09h35 - 11h05', subject: 'Algebra 1 (TD)', prof: '---', room: 'Room 8', type: 'TD' },
            { time: '11h10 - 12h40', subject: 'Physics 1 (TD)', prof: '---', room: 'Room 8', type: 'TD' },
            { time: '13h30 - 15h00', subject: 'Algebra 1 (Cours)', prof: 'Mrs Hebbache', room: 'Auditorium B', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'French 1 (Cours)', prof: 'Mme Ouslimane', room: 'Auditorium B', type: 'Cours' }
          ],
          'Sunday': [
            { time: '08h00 - 09h30', subject: 'Chemistry 1 (Cours)', prof: 'Mrs Bali', room: 'Auditorium B', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Computer Science 1 (Cours)', prof: 'Mme Bader', room: 'Auditorium B', type: 'Cours' },
            { time: '13h30 - 16h35', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 6', type: 'TP' }
          ],
          'Monday': [
            { time: '08h00 - 11h05', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 6', type: 'TP' },
            { time: '11h10 - 12h40', subject: 'Computer Science 1 (TD)', prof: '---', room: 'Room 10', type: 'TD' },
            { time: '13h30 - 15h00', subject: 'Proba stat (Cours)', prof: 'Mme Chouchaoui', room: 'Auditorium B', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'تاريخ الجزائر (Cours)', prof: '---', room: 'Auditorium B', type: 'Cours' }
          ],
          'Tuesday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 6', type: 'TP' },
            { time: '13h30 - 15h00', subject: 'Physics 1 (Cours)', prof: 'Mme Kias', room: 'Auditorium B', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'Calculus 1 (Cours)', prof: 'Mrs Kechiche', room: 'Auditorium B', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 6', type: 'TP' },
            { time: '13h30 - 16h35', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 6', type: 'TP' },
            { time: '17h00 - 18h30', subject: 'Gle Economy (EAD)', prof: 'Mme Chouchaoui', room: 'En ligne', type: 'Cours' }
          ],
          'Thursday': [
            { time: '08h00 - 09h30', subject: 'English 1 (TD)', prof: 'Mr Yala', room: 'Auditorium B', type: 'TD' },
            { time: '09h35 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 6', type: 'TP' }
          ]
        },
        'g7': {
          'Saturday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 7', type: 'TP' },
            { time: '13h30 - 15h00', subject: 'Algebra 1 (Cours)', prof: 'Mrs Hebbache', room: 'Auditorium B', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'French 1 (Cours)', prof: 'Mme Ouslimane', room: 'Auditorium B', type: 'Cours' }
          ],
          'Sunday': [
            { time: '08h00 - 09h30', subject: 'Chemistry 1 (Cours)', prof: 'Mrs Bali', room: 'Auditorium B', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Computer Science 1 (Cours)', prof: 'Mme Bader', room: 'Auditorium B', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Algebra 1 (TD)', prof: '---', room: 'Room 2', type: 'TD' },
            { time: '13h30 - 16h35', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 7', type: 'TP' }
          ],
          'Monday': [
            { time: '08h00 - 11h05', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 7', type: 'TP' },
            { time: '11h10 - 12h40', subject: 'Proba 1 (TD)', prof: '---', room: 'Room 11', type: 'TD' },
            { time: '13h30 - 15h00', subject: 'Proba stat (Cours)', prof: 'Mme Chouchaoui', room: 'Auditorium B', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'تاريخ الجزائر (Cours)', prof: '---', room: 'Auditorium B', type: 'Cours' }
          ],
          'Tuesday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 7', type: 'TP' },
            { time: '13h30 - 15h00', subject: 'Physics 1 (Cours)', prof: 'Mme Kias', room: 'Auditorium B', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'Calculus 1 (Cours)', prof: 'Mrs Kechiche', room: 'Auditorium B', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 7', type: 'TP' },
            { time: '13h30 - 16h35', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 7', type: 'TP' }
          ],
          'Thursday': [
            { time: '08h00 - 09h30', subject: 'English 1 (TD)', prof: 'Mr Yala', room: 'Auditorium B', type: 'TD' },
            { time: '09h35 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 7', type: 'TP' }
          ]
        },
        'g8': {
          'Saturday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 8', type: 'TP' },
            { time: '13h30 - 15h00', subject: 'Algebra 1 (Cours)', prof: 'Mrs Hebbache', room: 'Auditorium B', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'French 1 (Cours)', prof: 'Mme Ouslimane', room: 'Auditorium B', type: 'Cours' }
          ],
          'Sunday': [
            { time: '08h00 - 09h30', subject: 'Chemistry 1 (Cours)', prof: 'Mrs Bali', room: 'Auditorium B', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Computer Science 1 (Cours)', prof: 'Mme Bader', room: 'Auditorium B', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Algebra 1 (TD)', prof: '---', room: 'Room 6', type: 'TD' },
            { time: '13h30 - 16h35', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 8', type: 'TP' }
          ],
          'Monday': [
            { time: '08h00 - 11h05', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 8', type: 'TP' },
            { time: '11h10 - 12h40', subject: 'Computer Science 1 (TD)', prof: '---', room: 'Room 11', type: 'TD' },
            { time: '13h30 - 15h00', subject: 'Proba stat (Cours)', prof: 'Mme Chouchaoui', room: 'Auditorium B', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'تاريخ الجزائر (Cours)', prof: '---', room: 'Auditorium B', type: 'Cours' }
          ],
          'Tuesday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 8', type: 'TP' },
            { time: '13h30 - 15h00', subject: 'Physics 1 (Cours)', prof: 'Mme Kias', room: 'Auditorium B', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'Calculus 1 (Cours)', prof: 'Mrs Kechiche', room: 'Auditorium B', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 8', type: 'TP' },
            { time: '13h30 - 16h35', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 8', type: 'TP' }
          ],
          'Thursday': [
            { time: '08h00 - 09h30', subject: 'English 1 (TD)', prof: 'Mr Yala', room: 'Auditorium B', type: 'TD' },
            { time: '09h35 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 8', type: 'TP' }
          ]
        },
        'g9': {
          'Saturday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 9', type: 'TP' },
            { time: '13h30 - 15h00', subject: 'Algebra 1 (Cours)', prof: 'Mrs Hebbache', room: 'Auditorium B', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'French 1 (Cours)', prof: 'Mme Ouslimane', room: 'Auditorium B', type: 'Cours' }
          ],
          'Sunday': [
            { time: '08h00 - 09h30', subject: 'Chemistry 1 (Cours)', prof: 'Mrs Bali', room: 'Auditorium B', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Computer Science 1 (Cours)', prof: 'Mme Bader', room: 'Auditorium B', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Calculus 1 (TD)', prof: '---', room: 'Room 10', type: 'TD' },
            { time: '13h30 - 16h35', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 9', type: 'TP' }
          ],
          'Monday': [
            { time: '08h00 - 11h05', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 9', type: 'TP' },
            { time: '11h10 - 12h40', subject: 'Chemistry 1 (TD)', prof: '---', room: 'Room 12', type: 'TD' },
            { time: '13h30 - 15h00', subject: 'Proba stat (Cours)', prof: 'Mme Chouchaoui', room: 'Auditorium B', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'تاريخ الجزائر (Cours)', prof: '---', room: 'Auditorium B', type: 'Cours' }
          ],
          'Tuesday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 9', type: 'TP' },
            { time: '13h30 - 15h00', subject: 'Physics 1 (Cours)', prof: 'Mme Kias', room: 'Auditorium B', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'Calculus 1 (Cours)', prof: 'Mrs Kechiche', room: 'Auditorium B', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 9', type: 'TP' },
            { time: '13h30 - 16h35', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 9', type: 'TP' }
          ],
          'Thursday': [
            { time: '08h00 - 09h30', subject: 'English 1 (TD)', prof: 'Mr Yala', room: 'Auditorium B', type: 'TD' },
            { time: '09h35 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 9', type: 'TP' }
          ]
        },
        'g10': {
          'Saturday': [
            { time: '08h00 - 11h05', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 10', type: 'TP' },
            { time: '11h10 - 12h40', subject: 'Proba 1 (TD)', prof: '---', room: 'Lab', type: 'TD' },
            { time: '13h30 - 15h00', subject: 'Algebra 1 (Cours)', prof: 'Mrs Hebbache', room: 'Auditorium B', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'French 1 (Cours)', prof: 'Mme Ouslimane', room: 'Auditorium B', type: 'Cours' }
          ],
          'Sunday': [
            { time: '08h00 - 09h30', subject: 'Chemistry 1 (Cours)', prof: 'Mrs Bali', room: 'Auditorium B', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Computer Science 1 (Cours)', prof: 'Mme Bader', room: 'Auditorium B', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Proba 1 (TD)', prof: '---', room: 'Room 4', type: 'TD' },
            { time: '13h30 - 16h35', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 10', type: 'TP' }
          ],
          'Monday': [
            { time: '08h00 - 11h05', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 10', type: 'TP' },
            { time: '11h10 - 12h40', subject: 'Computer Science 1 (TD)', prof: '---', room: 'Room 3', type: 'TD' },
            { time: '13h30 - 15h00', subject: 'Proba stat (Cours)', prof: 'Mme Chouchaoui', room: 'Auditorium B', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'تاريخ الجزائر (Cours)', prof: '---', room: 'Auditorium B', type: 'Cours' }
          ],
          'Tuesday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 10', type: 'TP' },
            { time: '13h30 - 15h00', subject: 'Physics 1 (Cours)', prof: 'Mme Kias', room: 'Auditorium B', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'Calculus 1 (Cours)', prof: 'Mrs Kechiche', room: 'Auditorium B', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 10', type: 'TP' },
            { time: '13h30 - 16h35', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 10', type: 'TP' }
          ],
          'Thursday': [
            { time: '08h00 - 09h30', subject: 'English 1 (TD)', prof: 'Mr Hassaine', room: 'Auditorium B', type: 'TD' },
            { time: '09h35 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 10', type: 'TP' }
          ]
        },
        'g11': {
          'Saturday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 11', type: 'TP' },
            { time: '13h30 - 15h00', subject: 'Algebra 1 (Cours)', prof: 'Mrs Hebbache', room: 'Auditorium B', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'French 1 (Cours)', prof: 'Mme Ouslimane', room: 'Auditorium B', type: 'Cours' }
          ],
          'Sunday': [
            { time: '08h00 - 09h30', subject: 'Chemistry 1 (Cours)', prof: 'Mrs Bali', room: 'Auditorium B', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Computer Science 1 (Cours)', prof: 'Mme Bader', room: 'Auditorium B', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Algebra 1 (TD)', prof: '---', room: 'Room 13', type: 'TD' },
            { time: '13h30 - 16h35', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 11', type: 'TP' }
          ],
          'Monday': [
            { time: '08h00 - 11h05', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 11', type: 'TP' },
            { time: '11h10 - 12h40', subject: 'Computer Science 1 (TD)', prof: '---', room: 'Room 14', type: 'TD' },
            { time: '13h30 - 15h00', subject: 'Proba stat (Cours)', prof: 'Mme Chouchaoui', room: 'Auditorium B', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'تاريخ الجزائر (Cours)', prof: '---', room: 'Auditorium B', type: 'Cours' }
          ],
          'Tuesday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 11', type: 'TP' },
            { time: '13h30 - 15h00', subject: 'Physics 1 (Cours)', prof: 'Mme Kias', room: 'Auditorium B', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'Calculus 1 (Cours)', prof: 'Mrs Kechiche', room: 'Auditorium B', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 11', type: 'TP' },
            { time: '13h30 - 16h35', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 11', type: 'TP' }
          ],
          'Thursday': [
            { time: '08h00 - 09h30', subject: 'English 1 (TD)', prof: 'Mr Hassaine', room: 'Auditorium B', type: 'TD' },
            { time: '09h35 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 11', type: 'TP' }
          ]
        },
        'g12': {
          'Saturday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 12', type: 'TP' },
            { time: '13h30 - 15h00', subject: 'Algebra 1 (Cours)', prof: 'Mrs Hebbache', room: 'Auditorium B', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'French 1 (Cours)', prof: 'Mme Ouslimane', room: 'Auditorium B', type: 'Cours' }
          ],
          'Sunday': [
            { time: '08h00 - 09h30', subject: 'Chemistry 1 (Cours)', prof: 'Mrs Bali', room: 'Auditorium B', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Computer Science 1 (Cours)', prof: 'Mme Bader', room: 'Auditorium B', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Calculus 1 (TD)', prof: '---', room: 'Room 13', type: 'TD' },
            { time: '13h30 - 16h35', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 12', type: 'TP' }
          ],
          'Monday': [
            { time: '08h00 - 11h05', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 12', type: 'TP' },
            { time: '11h10 - 12h40', subject: 'Chemistry 1 (TD)', prof: '---', room: 'Room 14', type: 'TD' },
            { time: '13h30 - 15h00', subject: 'Proba stat (Cours)', prof: 'Mme Chouchaoui', room: 'Auditorium B', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'تاريخ الجزائر (Cours)', prof: '---', room: 'Auditorium B', type: 'Cours' }
          ],
          'Tuesday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 12', type: 'TP' },
            { time: '13h30 - 15h00', subject: 'Physics 1 (Cours)', prof: 'Mme Kias', room: 'Auditorium B', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'Calculus 1 (Cours)', prof: 'Mrs Kechiche', room: 'Auditorium B', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 12', type: 'TP' },
            { time: '13h30 - 16h35', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 12', type: 'TP' }
          ],
          'Thursday': [
            { time: '08h00 - 09h30', subject: 'English 1 (TD)', prof: 'Mr Hassaine', room: 'Auditorium B', type: 'TD' },
            { time: '09h35 - 12h40', subject: 'Lab (Chemistry / Physics / Tech Draw)', prof: 'Équipe Labo', room: 'Laboratories 12', type: 'TP' }
          ]
        }
      },

      // ==========================================
      // 2CP - Groupes 1 à 12
      // ==========================================
      'prep_2': {
        'g1': {
          'Saturday': [
            { time: '08:00 - 09:30', subject: 'Calculus 3 (Cours)', prof: 'Mr. Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '09:35 - 11:05', subject: 'Computer Science 3 (Cours)', prof: 'Mr. Ould Kaddour', room: 'Auditorium A', type: 'Cours' },
            { time: '11:10 - 12:40', subject: 'Exp Tech (Cours)', prof: 'Mr. Benyettou', room: 'Auditorium A', type: 'Cours' },
            { time: '13:30 - 15:00', subject: 'General Electricity (TD)', prof: '---', room: 'Room 1', type: 'TD' },
            { time: '15:05 - 16:35', subject: 'Rational Mech 1 (TD)', prof: '---', room: 'Room 1', type: 'TD' }
          ],
          'Sunday': [
            { time: '08:00 - 11:05', subject: 'Physics 3 (Cours)', prof: 'Mr. Rezouidji', room: 'Auditorium A', type: 'Cours' },
            { time: '11:10 - 12:40', subject: 'Numerical Analysis 1 (Cours)', prof: 'Mr. Hamadi', room: 'Auditorium A', type: 'Cours' },
            { time: '13:30 - 15:00', subject: 'Computer Science 3 (TD)', prof: '---', room: 'Room 1', type: 'TD' },
            { time: '15:05 - 16:35', subject: 'Numerical Analysis 1 (TD)', prof: '---', room: 'Room 1', type: 'TD' }
          ],
          'Monday': [
            { time: '08:00 - 11:05', subject: 'Physics 3 (Cours)', prof: 'Mr. Rezouidji', room: 'Auditorium A', type: 'Cours' },
            { time: '11:10 - 12:40', subject: 'Numerical Analysis 1 (Cours)', prof: 'Mr. Hamadi', room: 'Auditorium A', type: 'Cours' },
            { time: '13:30 - 16:35', subject: 'Calculus 3 (Cours)', prof: 'Mr. Brahmi', room: 'Auditorium A', type: 'Cours' }
          ],
          'Tuesday': [
            { time: '08:00 - 09:30', subject: 'General Electricity (Cours)', prof: 'Mr. Rahoui', room: 'Auditorium A', type: 'Cours' },
            { time: '09:35 - 11:05', subject: 'Fluid Mechanics (Cours)', prof: 'Mr Kellou', room: 'Auditorium A', type: 'Cours' },
            { time: '11:10 - 12:40', subject: 'Chemistry 3 (Cours)', prof: 'Mme Bouhara', room: 'Auditorium A', type: 'Cours' },
            { time: '13:30 - 15:00', subject: 'Fluid Mechanics (TD)', prof: '---', room: 'Room 12', type: 'TD' },
            { time: '15:05 - 16:35', subject: 'General Electricity (TD)', prof: '---', room: 'Room 12', type: 'TD' }
          ],
          'Wednesday': [
            { time: '08:00 - 09:30', subject: 'Rational Mech 01 (Cours)', prof: 'Mrs Zouadi', room: 'Auditorium A', type: 'Cours' },
            { time: '09:35 - 11:05', subject: 'English 3', prof: 'Mr. Yala', room: 'Auditorium B', type: 'Cours' },
            { time: '11:10 - 12:40', subject: 'Chemistry 3 (Cours)', prof: 'Mme Dib', room: 'Auditorium B', type: 'Cours' },
            { time: '13:30 - 15:00', subject: 'Calculus 3 (TD)', prof: '---', room: 'Room 12', type: 'TD' },
            { time: '15:05 - 16:35', subject: 'Numerical Analysis 1 (TD)', prof: '---', room: 'Room 12', type: 'TD' }
          ],
          'Thursday': [
            { time: '08:00 - 12:40', subject: 'Lab(Chemistry/Physics/General Electronic/Fl-Mech)', prof: '---', room: 'Laboratories', type: 'TP' },
            { time: '13:30 - 15:00', subject: 'Fluid Mechanics (TD)', prof: '---', room: 'Room 12', type: 'TD' },
            { time: '15:05 - 16:35', subject: 'Chemistry 3 (TD)', prof: '---', room: 'Room 12', type: 'TD' }
          ]
        },
        'g2': {
          'Saturday': [
            { time: '08h00 - 09h30', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Computer Science 3 (Cours)', prof: 'Mr Ould Kaddour', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Exp Tech (Cours)', prof: 'Mr Benyettou', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Rational Mech 1 (TD)', prof: '---', room: 'Room 2', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'General Electricity (TD)', prof: '---', room: 'Room 2', type: 'TD' }
          ],
          'Sunday': [
            { time: '08h00 - 11h05', subject: 'Physics 3 (Cours)', prof: 'Mr Rezouidji', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Numerical Analysis 1 (Cours)', prof: 'Mr Hamadi', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Numerical Analysis 1 (TD)', prof: '---', room: 'Room 2', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Computer Science 3 (TD)', prof: '---', room: 'Room 2', type: 'TD' }
          ],
          'Monday': [
            { time: '08h00 - 09h30', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Rational Mech 1 (TD)', prof: '---', room: 'Room 2', type: 'TD' },
            { time: '11h10 - 12h40', subject: 'Calculus 3 (TD)', prof: '---', room: 'Room 2', type: 'TD' },
            { time: '13h30 - 15h00', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'General Electricity (TD)', prof: '---', room: 'Room 2', type: 'TD' }
          ],
          'Tuesday': [
            { time: '08h00 - 09h30', subject: 'Chemistry 3 (Cours)', prof: 'Mme Bouhara', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Fluid Mechanics (Cours)', prof: 'Mr Kellou', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'General Electricity (Cours)', prof: 'Mr Rahoui', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Fluid Mechanics (TD)', prof: '---', room: 'Room 2', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Chemistry 3 (TD)', prof: '---', room: 'Room 2', type: 'TD' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'Rational-Mech 01 (Cours)', prof: 'Mrs Zouadi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Chemistry 3 (Cours)', prof: 'Mme Bouhara', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'English 3 (Cours)', prof: 'Mr Yala', room: 'Auditorium B', type: 'Cours' }
          ],
          'Thursday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / General Electronic / Fl-Mech)', prof: 'Équipe Labo', room: 'Laboratories 2', type: 'TP' },
            { time: '13h30 - 15h00', subject: 'Chemistry 3 (TD)', prof: '---', room: 'Room 2', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Fluid Mechanics (TD)', prof: '---', room: 'Room 2', type: 'TD' }
          ]
        },
        'g3': {
          'Saturday': [
            { time: '08h00 - 09h30', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Computer Science 3 (Cours)', prof: 'Mr Ould Kaddour', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Exp Tech (Cours)', prof: 'Mr Benyettou', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Fluid Mechanics (TD)', prof: '---', room: 'Room 3', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Calculus 3 (TD)', prof: '---', room: 'Room 3', type: 'TD' }
          ],
          'Sunday': [
            { time: '08h00 - 11h05', subject: 'Physics 3 (Cours)', prof: 'Mr Rezouidji', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Numerical Analysis 1 (Cours)', prof: 'Mr Hamadi', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Calculus 3 (TD)', prof: '---', room: 'Room 3', type: 'TD' }
          ],
          'Monday': [
            { time: '08h00 - 09h30', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Calculus 3 (TD)', prof: '---', room: 'Room 3', type: 'TD' },
            { time: '11h10 - 12h40', subject: 'Rational Mech 1 (TD)', prof: '---', room: 'Room 3', type: 'TD' },
            { time: '13h30 - 15h00', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'Fluid Mechanics (TD)', prof: '---', room: 'Room 3', type: 'TD' }
          ],
          'Tuesday': [
            { time: '08h00 - 09h30', subject: 'Chemistry 3 (Cours)', prof: 'Mme Bouhara', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Fluid Mechanics (Cours)', prof: 'Mr Kellou', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'General Electricity (Cours)', prof: 'Mr Rahoui', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'General Electricity (TD)', prof: '---', room: 'Room 3', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Computer Science 3 (TD)', prof: '---', room: 'Room 3', type: 'TD' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'Rational-Mech 01 (Cours)', prof: 'Mrs Zouadi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Chemistry 3 (Cours)', prof: 'Mme Bouhara', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'English 3 (Cours)', prof: 'Mr Yala', room: 'Auditorium B', type: 'Cours' }
          ],
          'Thursday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / General Electronic / Fl-Mech)', prof: 'Équipe Labo', room: 'Laboratories 3', type: 'TP' },
            { time: '13h30 - 15h00', subject: 'Fluid Mechanics (TD)', prof: '---', room: 'Room 3', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Computer Science 3 (TD)', prof: '---', room: 'Room 3', type: 'TD' }
          ]
        },
        'g4': {
          'Saturday': [
            { time: '08h00 - 09h30', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Computer Science 3 (Cours)', prof: 'Mr Ould Kaddour', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Exp Tech (Cours)', prof: 'Mr Benyettou', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Calculus 3 (TD)', prof: '---', room: 'Room 4', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Fluid Mechanics (TD)', prof: '---', room: 'Room 4', type: 'TD' }
          ],
          'Sunday': [
            { time: '08h00 - 11h05', subject: 'Physics 3 (Cours)', prof: 'Mr Rezouidji', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Numerical Analysis 1 (Cours)', prof: 'Mr Hamadi', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'General Electricity (TD)', prof: '---', room: 'Room 4', type: 'TD' }
          ],
          'Monday': [
            { time: '08h00 - 09h30', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Numerical Analysis 1 (TD)', prof: '---', room: 'Room 4', type: 'TD' },
            { time: '11h10 - 12h40', subject: 'General Electricity (TD)', prof: '---', room: 'Room 4', type: 'TD' },
            { time: '13h30 - 15h00', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'Chemistry 3 (TD)', prof: '---', room: 'Room 4', type: 'TD' }
          ],
          'Tuesday': [
            { time: '08h00 - 09h30', subject: 'Chemistry 3 (Cours)', prof: 'Mme Bouhara', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Fluid Mechanics (Cours)', prof: 'Mr Kellou', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'General Electricity (Cours)', prof: 'Mr Rahoui', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Computer Science 3 (TD)', prof: '---', room: 'Room 4', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'General Electricity (TD)', prof: '---', room: 'Room 4', type: 'TD' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'Rational-Mech 01 (Cours)', prof: 'Mrs Zouadi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Chemistry 3 (Cours)', prof: 'Mme Bouhara', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'English 3 (Cours)', prof: 'Mr Yala', room: 'Auditorium B', type: 'Cours' }
          ],
          'Thursday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / General Electronic / Fl-Mech)', prof: 'Équipe Labo', room: 'Laboratories 4', type: 'TP' },
            { time: '13h30 - 15h00', subject: 'Rational Mech 1 (TD)', prof: '---', room: 'Room 4', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'General Electricity (TD)', prof: '---', room: 'Room 4', type: 'TD' }
          ]
        },
        'g5': {
          'Saturday': [
            { time: '08h00 - 09h30', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Computer Science 3 (Cours)', prof: 'Mr Ould Kaddour', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Exp Tech (Cours)', prof: 'Mr Benyettou', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Numerical Analysis 1 (TD)', prof: '---', room: 'Room 6', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Computer Science 3 (TD)', prof: '---', room: 'Room 6', type: 'TD' }
          ],
          'Sunday': [
            { time: '08h00 - 11h05', subject: 'Physics 3 (Cours)', prof: 'Mr Rezouidji', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Numerical Analysis 1 (Cours)', prof: 'Mr Hamadi', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Fluid Mechanics (TD)', prof: '---', room: 'Room 6', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Rational Mech 1 (TD)', prof: '---', room: 'Room 6', type: 'TD' }
          ],
          'Monday': [
            { time: '08h00 - 09h30', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Chemistry 3 (TD)', prof: '---', room: 'Room 6', type: 'TD' },
            { time: '11h10 - 12h40', subject: 'General Electricity (TD)', prof: '---', room: 'Room 6', type: 'TD' },
            { time: '13h30 - 15h00', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' }
          ],
          'Tuesday': [
            { time: '08h00 - 09h30', subject: 'Chemistry 3 (Cours)', prof: 'Mme Bouhara', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Fluid Mechanics (Cours)', prof: 'Mr Kellou', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'General Electricity (Cours)', prof: 'Mr Rahoui', room: 'Auditorium A', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'Rational-Mech 01 (Cours)', prof: 'Mrs Zouadi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Chemistry 3 (Cours)', prof: 'Mme Bouhara', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'English 3', prof: 'Mr Azzi', room: 'Room 22', type: 'TD' }
          ],
          'Thursday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / General Electronic / Fl-Mech)', prof: 'Équipe Labo', room: 'Laboratories 5', type: 'TP' },
            { time: '13h30 - 15h00', subject: 'Numerical Analysis 1 (TD)', prof: '---', room: 'Room 6', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Rational Mech 1 (TD)', prof: '---', room: 'Room 6', type: 'TD' }
          ]
        },
        'g6': {
          'Saturday': [
            { time: '08h00 - 09h30', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Computer Science 3 (Cours)', prof: 'Mr Ould Kaddour', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Exp Tech (Cours)', prof: 'Mr Benyettou', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Computer Science 3 (TD)', prof: '---', room: 'Room 7', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Numerical Analysis 1 (TD)', prof: '---', room: 'Room 7', type: 'TD' }
          ],
          'Sunday': [
            { time: '08h00 - 11h05', subject: 'Physics 3 (Cours)', prof: 'Mr Rezouidji', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Numerical Analysis 1 (Cours)', prof: 'Mr Hamadi', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Fluid Mechanics (TD)', prof: '---', room: 'Room 7', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Rational Mech 1 (TD)', prof: '---', room: 'Room 7', type: 'TD' }
          ],
          'Monday': [
            { time: '08h00 - 09h30', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'General Electricity (TD)', prof: '---', room: 'Room 13', type: 'TD' },
            { time: '11h10 - 12h40', subject: 'Physics 3 (TD)', prof: '---', room: 'Auditorium A', type: 'TD' },
            { time: '13h30 - 15h00', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'Numerical Analysis 1 (TD)', prof: '---', room: 'Room 6', type: 'TD' }
          ],
          'Tuesday': [
            { time: '08h00 - 09h30', subject: 'Chemistry 3 (Cours)', prof: 'Mme Bouhara', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Fluid Mechanics (Cours)', prof: 'Mr Kellou', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'General Electricity (Cours)', prof: 'Mr Rahoui', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Fluid Mechanics (TD)', prof: '---', room: 'Room 6', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Chemistry 3 (TD)', prof: '---', room: 'Room 6', type: 'TD' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'Rational-Mech 01 (Cours)', prof: 'Mrs Zouadi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Chemistry 3 (Cours)', prof: 'Mme Bouhara', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'English 3', prof: 'Mr Azzi', room: 'Room 22', type: 'TD' }
          ],
          'Thursday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / General Electronic / Fl-Mech)', prof: 'Équipe Labo', room: 'Laboratories 6', type: 'TP' },
            { time: '13h30 - 15h00', subject: 'Rational Mech 1 (TD)', prof: '---', room: 'Room 6', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Fluid Mechanics (TD)', prof: '---', room: 'Room 6', type: 'TD' }
          ]
        },
        'g7': {
          'Saturday': [
            { time: '08h00 - 09h30', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Computer Science 3 (Cours)', prof: 'Mr Ould Kaddour', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Exp Tech (Cours)', prof: 'Mr Benyettou', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'General Electricity (TD)', prof: '---', room: 'Room 9', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Rational Mech 1 (TD)', prof: '---', room: 'Room 9', type: 'TD' }
          ],
          'Sunday': [
            { time: '08h00 - 11h05', subject: 'Physics 3 (Cours)', prof: 'Mr Rezouidji', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Numerical Analysis 1 (Cours)', prof: 'Mr Hamadi', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Engineering (Cours)', prof: 'Mrs Chiali', room: 'Auditorium A', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'Engineering (Cours)', prof: 'Mrs Chiali', room: 'Auditorium A', type: 'Cours' }
          ],
          'Monday': [
            { time: '08h00 - 09h30', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Physics 3 (TD)', prof: '---', room: 'Auditorium A', type: 'TD' },
            { time: '11h10 - 12h40', subject: 'Calculus 3 (TD)', prof: '---', room: 'Auditorium A', type: 'TD' },
            { time: '13h30 - 15h00', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'General Electricity (TD)', prof: '---', room: 'Room 12', type: 'TD' }
          ],
          'Tuesday': [
            { time: '08h00 - 09h30', subject: 'Chemistry 3 (Cours)', prof: 'Mme Bouhara', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Fluid Mechanics (Cours)', prof: 'Mr Kellou', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'General Electricity (Cours)', prof: 'Mr Rahoui', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Fluid Mechanics (TD)', prof: '---', room: 'Room 7', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Chemistry 3 (TD)', prof: '---', room: 'Room 7', type: 'TD' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'Rational-Mech 01 (Cours)', prof: 'Mrs Zouadi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Chemistry 3 (Cours)', prof: 'Mme Bouhara', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'English 3', prof: 'Mr Yala', room: 'Auditorium A', type: 'TD' }
          ],
          'Thursday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / General Electronic / Fl-Mech)', prof: 'Équipe Labo', room: 'Laboratories 7', type: 'TP' },
            { time: '13h30 - 15h00', subject: 'General Electricity (TD)', prof: '---', room: 'Room 7', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Computer Science 3 (TD)', prof: '---', room: 'Room 7', type: 'TD' }
          ]
        },
        'g8': {
          'Saturday': [
            { time: '08h00 - 09h30', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Computer Science 3 (Cours)', prof: 'Mr Ould Kaddour', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Exp Tech (Cours)', prof: 'Mr Benyettou', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Rational Mech 1 (TD)', prof: '---', room: 'Room 10', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'General Electricity (TD)', prof: '---', room: 'Room 10', type: 'TD' }
          ],
          'Sunday': [
            { time: '08h00 - 11h05', subject: 'Physics 3 (Cours)', prof: 'Mr Rezouidji', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Numerical Analysis 1 (Cours)', prof: 'Mr Hamadi', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Engineering (Cours)', prof: 'Mrs Chiali', room: 'Auditorium A', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'Engineering (Cours)', prof: 'Mrs Chiali', room: 'Auditorium A', type: 'Cours' }
          ],
          'Monday': [
            { time: '08h00 - 09h30', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Calculus 3 (TD)', prof: '---', room: 'Auditorium A', type: 'TD' },
            { time: '11h10 - 12h40', subject: 'Physics 3 (TD)', prof: '---', room: 'Auditorium A', type: 'TD' },
            { time: '13h30 - 15h00', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'Fluid Mechanics (TD)', prof: '---', room: 'Room 2', type: 'TD' }
          ],
          'Tuesday': [
            { time: '08h00 - 09h30', subject: 'Chemistry 3 (Cours)', prof: 'Mme Bouhara', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Fluid Mechanics (Cours)', prof: 'Mr Kellou', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'General Electricity (Cours)', prof: 'Mr Rahoui', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'General Electricity (TD)', prof: '---', room: 'Room 8', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Computer Science 3 (TD)', prof: '---', room: 'Room 8', type: 'TD' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'Rational-Mech 01 (Cours)', prof: 'Mrs Zouadi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Chemistry 3 (Cours)', prof: 'Mme Bouhara', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'English 3', prof: 'Mr Yala', room: 'Auditorium A', type: 'TD' }
          ],
          'Thursday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / General Electronic / Fl-Mech)', prof: 'Équipe Labo', room: 'Laboratories 8', type: 'TP' },
            { time: '13h30 - 15h00', subject: 'Fluid Mechanics (TD)', prof: '---', room: 'Room 8', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'General Electricity (TD)', prof: '---', room: 'Room 8', type: 'TD' }
          ]
        },
        'g9': {
          'Saturday': [
            { time: '08h00 - 09h30', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Computer Science 3 (Cours)', prof: 'Mr Ould Kaddour', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Exp Tech (Cours)', prof: 'Mr Benyettou', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'General Electricity (TD)', prof: '---', room: 'Room 11', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Calculus 3 (TD)', prof: '---', room: 'Room 11', type: 'TD' }
          ],
          'Sunday': [
            { time: '08h00 - 11h05', subject: 'Physics 3 (Cours)', prof: 'Mr Rezouidji', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Numerical Analysis 1 (Cours)', prof: 'Mr Hamadi', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Engineering (Cours)', prof: 'Mrs Chiali', room: 'Auditorium A', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'Engineering (Cours)', prof: 'Mrs Chiali', room: 'Auditorium A', type: 'Cours' }
          ],
          'Monday': [
            { time: '08h00 - 09h30', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Calculus 3 (TD)', prof: '---', room: 'Auditorium A', type: 'TD' },
            { time: '11h10 - 12h40', subject: 'Numerical Analysis 1 (TD)', prof: '---', room: 'Auditorium A', type: 'TD' },
            { time: '13h30 - 15h00', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'Chemistry 3 (TD)', prof: '---', room: 'Room 3', type: 'TD' }
          ],
          'Tuesday': [
            { time: '08h00 - 09h30', subject: 'Chemistry 3 (Cours)', prof: 'Mme Bouhara', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Fluid Mechanics (Cours)', prof: 'Mr Kellou', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'General Electricity (Cours)', prof: 'Mr Rahoui', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Computer Science 3 (TD)', prof: '---', room: 'Room 9', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'General Electricity (TD)', prof: '---', room: 'Room 9', type: 'TD' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'Rational-Mech 01 (Cours)', prof: 'Mrs Zouadi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Chemistry 3 (Cours)', prof: 'Mme Bouhara', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'English 3', prof: 'Mr Yala', room: 'Auditorium A', type: 'TD' }
          ],
          'Thursday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / General Electronic / Fl-Mech)', prof: 'Équipe Labo', room: 'Laboratories 9', type: 'TP' },
            { time: '13h30 - 15h00', subject: 'Chemistry 3 (TD)', prof: '---', room: 'Room 9', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Numerical Analysis 1 (TD)', prof: '---', room: 'Room 9', type: 'TD' }
          ]
        },
        'g10': {
          'Saturday': [
            { time: '08h00 - 09h30', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Computer Science 3 (Cours)', prof: 'Mr Ould Kaddour', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Exp Tech (Cours)', prof: 'Mr Benyettou', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Rational Mech 1 (TD)', prof: '---', room: 'Room 12', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'General Electricity (TD)', prof: '---', room: 'Room 12', type: 'TD' }
          ],
          'Sunday': [
            { time: '08h00 - 11h05', subject: 'Physics 3 (Cours)', prof: 'Mr Rezouidji', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Numerical Analysis 1 (Cours)', prof: 'Mr Hamadi', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Engineering (Cours)', prof: 'Mrs Chiali', room: 'Auditorium A', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'Engineering (Cours)', prof: 'Mrs Chiali', room: 'Auditorium A', type: 'Cours' }
          ],
          'Monday': [
            { time: '08h00 - 09h30', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Physics 3 (TD)', prof: '---', room: 'Auditorium A', type: 'TD' },
            { time: '11h10 - 12h40', subject: 'Numerical Analysis 1 (TD)', prof: '---', room: 'Auditorium A', type: 'TD' },
            { time: '13h30 - 15h00', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'Fluid Mechanics (TD)', prof: '---', room: 'Room 4', type: 'TD' }
          ],
          'Tuesday': [
            { time: '08h00 - 09h30', subject: 'Chemistry 3 (Cours)', prof: 'Mme Bouhara', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Fluid Mechanics (Cours)', prof: 'Mr Kellou', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'General Electricity (Cours)', prof: 'Mr Rahoui', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Fluid Mechanics (TD)', prof: '---', room: 'Room 10', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Chemistry 3 (TD)', prof: '---', room: 'Room 10', type: 'TD' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'Rational-Mech 01 (Cours)', prof: 'Mrs Zouadi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Chemistry 3 (Cours)', prof: 'Mme Bouhara', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'English 3', prof: 'Mr Yala', room: 'Auditorium B', type: 'TD' }
          ],
          'Thursday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / General Electronic / Fl-Mech)', prof: 'Équipe Labo', room: 'Laboratories 10', type: 'TP' },
            { time: '13h30 - 15h00', subject: 'Numerical Analysis 1 (TD)', prof: '---', room: 'Room 10', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Computer Science 3 (TD)', prof: '---', room: 'Room 10', type: 'TD' }
          ]
        },
        'g11': {
          'Saturday': [
            { time: '08h00 - 09h30', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Computer Science 3 (Cours)', prof: 'Mr Ould Kaddour', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Exp Tech (Cours)', prof: 'Mr Benyettou', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Fluid Mechanics (TD)', prof: '---', room: 'Room 13', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Calculus 3 (TD)', prof: '---', room: 'Room 13', type: 'TD' }
          ],
          'Sunday': [
            { time: '08h00 - 11h05', subject: 'Physics 3 (Cours)', prof: 'Mr Rezouidji', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Numerical Analysis 1 (Cours)', prof: 'Mr Hamadi', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Engineering (Cours)', prof: 'Mrs Chiali', room: 'Auditorium A', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'Engineering (Cours)', prof: 'Mrs Chiali', room: 'Auditorium A', type: 'Cours' }
          ],
          'Monday': [
            { time: '08h00 - 09h30', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Rational Mech 1 (TD)', prof: '---', room: 'Auditorium A', type: 'TD' },
            { time: '11h10 - 12h40', subject: 'Physics 3 (TD)', prof: '---', room: 'Auditorium A', type: 'TD' },
            { time: '13h30 - 15h00', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'General Electricity (TD)', prof: '---', room: 'Room 1', type: 'TD' }
          ],
          'Tuesday': [
            { time: '08h00 - 09h30', subject: 'Chemistry 3 (Cours)', prof: 'Mme Bouhara', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Fluid Mechanics (Cours)', prof: 'Mr Kellou', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'General Electricity (Cours)', prof: 'Mr Rahoui', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'General Electricity (TD)', prof: '---', room: 'Room 11', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Computer Science 3 (TD)', prof: '---', room: 'Room 11', type: 'TD' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'Rational-Mech 01 (Cours)', prof: 'Mrs Zouadi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Chemistry 3 (Cours)', prof: 'Mme Bouhara', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'English 3', prof: 'Mr Omar', room: 'Room 5', type: 'TD' }
          ],
          'Thursday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / General Electronic / Fl-Mech)', prof: 'Équipe Labo', room: 'Laboratories 11', type: 'TP' },
            { time: '13h30 - 15h00', subject: 'Calculus 3 (TD)', prof: '---', room: 'Room 11', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Numerical Analysis 1 (TD)', prof: '---', room: 'Room 11', type: 'TD' }
          ]
        },
        'g12': {
          'Saturday': [
            { time: '08h00 - 09h30', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Computer Science 3 (Cours)', prof: 'Mr Ould Kaddour', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Exp Tech (Cours)', prof: 'Mr Benyettou', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Computer Science 3 (TD)', prof: '---', room: 'Room 13', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'Fluid Mechanics (TD)', prof: '---', room: 'Room 13', type: 'TD' }
          ],
          'Sunday': [
            { time: '08h00 - 11h05', subject: 'Physics 3 (Cours)', prof: 'Mr Rezouidji', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Numerical Analysis 1 (Cours)', prof: 'Mr Hamadi', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Engineering (Cours)', prof: 'Mrs Chiali', room: 'Auditorium A', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'Engineering (Cours)', prof: 'Mrs Chiali', room: 'Auditorium A', type: 'Cours' }
          ],
          'Monday': [
            { time: '08h00 - 09h30', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Physics 3 (TD)', prof: '---', room: 'Auditorium A', type: 'TD' },
            { time: '11h10 - 12h40', subject: 'Calculus 3 (TD)', prof: '---', room: 'Auditorium A', type: 'TD' },
            { time: '13h30 - 15h00', subject: 'Calculus 3 (Cours)', prof: 'Mr Brahmi', room: 'Auditorium A', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'Chemistry 3 (TD)', prof: '---', room: 'Room 1', type: 'TD' }
          ],
          'Tuesday': [
            { time: '08h00 - 09h30', subject: 'Chemistry 3 (Cours)', prof: 'Mme Bouhara', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Fluid Mechanics (Cours)', prof: 'Mr Kellou', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'General Electricity (Cours)', prof: 'Mr Rahoui', room: 'Auditorium A', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'Chemistry 3 (TD)', prof: '---', room: 'Room 12', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'General Electricity (TD)', prof: '---', room: 'Room 12', type: 'TD' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'Rational-Mech 01 (Cours)', prof: 'Mrs Zouadi', room: 'Auditorium A', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Chemistry 3 (Cours)', prof: 'Mme Bouhara', room: 'Auditorium A', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'English 3', prof: 'Mr Omar', room: 'Room 5', type: 'TD' }
          ],
          'Thursday': [
            { time: '08h00 - 12h40', subject: 'Lab (Chemistry / Physics / General Electronic / Fl-Mech)', prof: 'Équipe Labo', room: 'Laboratories 12', type: 'TP' },
            { time: '13h30 - 15h00', subject: 'Computer Science 3 (TD)', prof: '---', room: 'Room 12', type: 'TD' },
            { time: '15h05 - 16h35', subject: 'General Electricity (TD)', prof: '---', room: 'Room 12', type: 'TD' }
          ]
        }
      },

      // ==========================================
      // DIB
      // ==========================================
      'dib_1': {
        'g1': {
          'Saturday': [{ time: '09h35 - 11h05', subject: 'Constr Mat', prof: 'BADAOUI', room: 'En ligne', type: 'Cours' }],
          'Sunday': [
            { time: '08h00 - 09h30', subject: 'SOM', prof: 'LAIB', room: '7', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Appl Hydr', prof: 'BOUSSADI', room: '8', type: 'Cours' },
            { time: '13h00 - 16h05', subject: 'PRACTICAL (Topo/SOM/Appl Geo)', prof: 'ALEM / LAIB / OMRACI', room: 'Labo', type: 'TP' }
          ],
          'Monday': [
            { time: '08h00 - 09h30', subject: 'Appl Geology', prof: 'OMRACI', room: '7', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Soil Mech 1', prof: 'BENOUMECHIARA', room: '7', type: 'Cours' },
            { time: '13h00 - 14h30', subject: 'Techn English', prof: 'AMALOU', room: '7', type: 'TD' },
            { time: '14h35 - 16h05', subject: 'Topo', prof: 'ALEM', room: '7', type: 'Cours' }
          ],
          'Tuesday': [
            { time: '08h00 - 10h00', subject: 'SOM', prof: 'LAIB', room: '7', type: 'Cours' },
            { time: '10h05 - 12h05', subject: 'MMC', prof: 'MERDOUD', room: '6', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'Ter Plan Env Sust', prof: 'SAADI', room: '7', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Soil Mech 1', prof: 'BENOUMECHIARA', room: '7', type: 'Cours' },
            { time: '13h00 - 14h30', subject: 'Num Prog', prof: 'CHAMI', room: 'CC', type: 'Cours' },
            { time: '14h35 - 16h05', subject: 'Entrepreneurship', prof: 'MOBARKI', room: 'CC', type: 'Cours' }
          ],
          'Thursday': [
            { time: '08h00 - 11h00', subject: 'PRACTICAL (Topo/SM/Appl Geo)', prof: 'ALEM / ALLALOU / GUETTACHE', room: 'Labo', type: 'TP' },
            { time: '11h05 - 12h35', subject: 'IA', prof: 'CHAMI', room: 'CLASSROOM 8', type: 'Cours' },
            { time: '13h00 - 16h05', subject: 'Specialized Lectures', prof: 'CHIALI', room: 'Amphi A', type: 'Cours' }
          ]
        },
        'g2': {
          'Saturday': [{ time: '09h35 - 11h05', subject: 'Constr Mat', prof: 'BADAOUI', room: 'En ligne', type: 'Cours' }],
          'Sunday': [
            { time: '08h00 - 09h30', subject: 'Appl Hydr', prof: 'BOUSSADI', room: '8', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'SOM', prof: 'LAIB', room: '8', type: 'Cours' },
            { time: '13h00 - 16h05', subject: 'PRACTICAL (Topo/SOM/Appl Geo)', prof: 'ALEM / LAIB / OMRACI', room: 'Labo', type: 'TP' }
          ],
          'Monday': [
            { time: '08h00 - 09h30', subject: 'Soil Mech 1', prof: 'BENOUMECHIARA', room: '8', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Appl Geology', prof: 'OMRACI', room: '8', type: 'Cours' },
            { time: '13h00 - 14h30', subject: 'Topo', prof: 'ALEM', room: '8', type: 'Cours' },
            { time: '14h35 - 16h05', subject: 'Techn English', prof: 'AMALOU', room: '8', type: 'TD' }
          ],
          'Tuesday': [
            { time: '08h00 - 10h00', subject: 'SOM', prof: 'LAIB', room: '7', type: 'Cours' },
            { time: '10h05 - 12h05', subject: 'MMC', prof: 'MERDOUD', room: '7', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'Soil Mech 1', prof: 'BENOUMECHIARA', room: '8', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Ter Plan Env Sust', prof: 'SAADI', room: '8', type: 'Cours' },
            { time: '13h00 - 14h30', subject: 'Entrepreneurship', prof: 'MOBARKI', room: '7', type: 'Cours' },
            { time: '14h35 - 16h05', subject: 'Num Prog', prof: 'CHAMI', room: '7', type: 'Cours' }
          ],
          'Thursday': [
            { time: '08h00 - 11h00', subject: 'PRACTICAL (Topo/SM/Appl Geo)', prof: 'ALEM / ALLALOU / GUETTACHE', room: 'Labo', type: 'TP' },
            { time: '11h05 - 12h35', subject: 'IA', prof: 'CHAMI', room: 'CLASSROOM 7', type: 'Cours' },
            { time: '13h00 - 16h05', subject: 'Specialized Lectures', prof: 'CHIALI', room: 'Amphi A', type: 'Cours' }
          ]
        },
        'g3': {
          'Saturday': [{ time: '09h35 - 11h05', subject: 'Constr Mat', prof: 'BADAOUI', room: 'En ligne', type: 'Cours' }],
          'Sunday': [
            { time: '08h00 - 09h30', subject: 'MMC', prof: 'MERDOUD', room: '9', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'SOM', prof: 'GASSIS', room: '9', type: 'Cours' },
            { time: '13h00 - 16h05', subject: 'PRACTICAL (Topo/SOM/Appl Geo)', prof: 'ALEM / LAIB / OMRACI', room: 'Labo', type: 'TP' }
          ],
          'Monday': [
            { time: '08h00 - 09h30', subject: 'Topo', prof: 'ALEM', room: '9', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Soil Mech 1', prof: 'BERRICHE', room: '9', type: 'Cours' },
            { time: '13h00 - 14h30', subject: 'Appl Geology', prof: 'OMRACI', room: '9', type: 'Cours' },
            { time: '14h35 - 16h05', subject: 'Num Prog', prof: 'DALI', room: '9', type: 'Cours' }
          ],
          'Tuesday': [
            { time: '08h00 - 10h00', subject: 'SOM', prof: 'LAIB', room: '8', type: 'Cours' },
            { time: '10h05 - 12h05', subject: 'Appl Hydr', prof: 'RAHMANI', room: '8', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'Entrepreneurship', prof: 'MOBARKI', room: '9', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Soil Mech 1', prof: 'BERRICHE', room: '9', type: 'Cours' },
            { time: '13h00 - 14h30', subject: 'Ter Plan Env Sust', prof: 'SAADI', room: '8', type: 'Cours' },
            { time: '14h35 - 16h05', subject: 'Techn English', prof: 'AMALOU', room: '8', type: 'TD' }
          ],
          'Thursday': [
            { time: '08h00 - 11h00', subject: 'PRACTICAL (Topo/SM/Appl Geo)', prof: 'ALEM / ALLALOU / GUETTACHE', room: 'Labo', type: 'TP' },
            { time: '13h00 - 16h05', subject: 'Specialized Lectures', prof: 'CHIALI', room: 'Amphi A', type: 'Cours' }
          ]
        },
        'g4': {
          'Saturday': [{ time: '09h35 - 11h05', subject: 'Constr Mat', prof: 'BADAOUI', room: 'En ligne', type: 'Cours' }],
          'Sunday': [
            { time: '08h00 - 09h30', subject: 'SOM', prof: 'GASSIS', room: '25', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'MMC', prof: 'MERDOUD', room: '25', type: 'Cours' },
            { time: '13h00 - 16h05', subject: 'PRACTICAL (Topo/SOM/Appl Geo)', prof: 'ALEM / LAIB / OMRACI', room: 'Labo', type: 'TP' }
          ],
          'Monday': [
            { time: '08h00 - 09h30', subject: 'Soil Mech 1', prof: 'BERRICHE', room: '25', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Topo', prof: 'ALEM', room: '25', type: 'Cours' },
            { time: '13h00 - 14h30', subject: 'Num Prog', prof: 'DALI', room: 'CC', type: 'Cours' },
            { time: '14h35 - 16h05', subject: 'Appl Geology', prof: 'OMRACI', room: 'CC', type: 'Cours' }
          ],
          'Tuesday': [
            { time: '08h00 - 10h00', subject: 'Appl Hydr', prof: 'RAHMANI', room: '9', type: 'Cours' },
            { time: '10h05 - 12h05', subject: 'SOM', prof: 'GASSIS', room: '9', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'Soil Mech 1', prof: 'BERRICHE', room: '2', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Entrepreneurship', prof: 'MOBARKI', room: '2', type: 'Cours' },
            { time: '13h00 - 14h30', subject: 'Techn English', prof: 'AMALOU', room: '9', type: 'TD' },
            { time: '14h35 - 16h05', subject: 'Ter Plan Env Sust', prof: 'SAADI', room: '9', type: 'Cours' }
          ],
          'Thursday': [
            { time: '08h00 - 11h00', subject: 'PRACTICAL (Topo/SM/Appl Geo)', prof: 'ALEM / ALLALOU / GUETTACHE', room: 'Labo', type: 'TP' },
            { time: '13h00 - 16h05', subject: 'Specialized Lectures', prof: 'CHIALI', room: 'Amphi A', type: 'Cours' }
          ]
        }
      },
      'dib_2': {
        'g1': {
          'Sunday': [
            { time: '08h00 - 10h00', subject: 'ROAD GEOT', prof: 'DERRICHE', room: '5', type: 'Cours' },
            { time: '10h05 - 12h05', subject: 'RC', prof: 'TAFRAOUT', room: '5', type: 'Cours' },
            { time: '13h00 - 14h30', subject: 'CM', prof: 'OUAKLI', room: '5', type: 'Cours' }
          ],
          'Monday': [
            { time: '08h00 - 10h00', subject: 'STRUCT DYN', prof: 'LARBI', room: '5', type: 'Cours' },
            { time: '10h05 - 12h05', subject: 'FEM', prof: 'MEHIAOUI', room: '5', type: 'Cours' },
            { time: '13h00 - 16h05', subject: 'PRACTICAL (RG/SM4/ROADS)', prof: 'MAHIEDDINE / DALI / KHOUAS - DEKALI', room: 'LABO', type: 'TP' }
          ],
          'Tuesday': [
            { time: '08h00 - 09h30', subject: 'ROAD SKETCH / GOUMETTRE', prof: 'HATRI-ASSAS', room: '25', type: 'TD' },
            { time: '09h35 - 11h05', subject: 'ROCK MECH', prof: 'BENAMGHAR', room: '5', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'BIM', prof: 'KERMICHE & TAFRAOUT', room: 'CLASSROOM 25', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'ADV STRUCT MECH', prof: 'ASSAS', room: '5', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'RC', prof: 'BENREDOUANE', room: '5', type: 'Cours' },
            { time: '13h00 - 16h05', subject: 'ROADS', prof: 'ASSAS', room: 'Amphi A', type: 'Cours' }
          ],
          'Thursday': [
            { time: '08h00 - 09h30', subject: 'PRES CONCR', prof: 'AMIEUR', room: '5', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'RAILWAY', prof: 'REMDANE', room: '5', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'ASS-URB', prof: 'BOUSSADI', room: 'CLASSROOM 5', type: 'Cours' },
            { time: '13h00 - 16h00', subject: 'IN SITU VISIT', prof: '---', room: 'Mape', type: 'TP' }
          ]
        },
        'g2': {
          'Sunday': [
            { time: '08h00 - 10h00', subject: 'SOIL MECH 4', prof: 'HAMADI', room: '22', type: 'Cours' },
            { time: '10h05 - 12h05', subject: 'FEM', prof: 'MEHIAOUI', room: '22', type: 'Cours' },
            { time: '13h00 - 14h30', subject: 'CM', prof: 'OUMOUSSA', room: '22', type: 'Cours' }
          ],
          'Monday': [
            { time: '08h00 - 10h00', subject: 'ROAD GEOT', prof: 'DERRICHE', room: '22', type: 'Cours' },
            { time: '10h05 - 12h05', subject: 'SOIL MECH 4', prof: 'HAMADI', room: '22', type: 'Cours' },
            { time: '13h00 - 16h05', subject: 'PRACTICAL (RG/SM4/ROADS)', prof: 'MAHIEDDINE / DALI / KHOUAS - DEKALI', room: 'LABO', type: 'TP' }
          ],
          'Tuesday': [
            { time: '08h00 - 09h30', subject: 'ROCK MECH', prof: 'BENAMGHAR', room: '5', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'ROAD SKETCH / GOUMETTRE', prof: 'HATRI-ASSAS', room: '5', type: 'TD' },
            { time: '11h10 - 12h40', subject: 'BIM', prof: 'KERMICHE & TAFRAOUT', room: 'CLASSROOM 25', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'STRUCT DYN', prof: 'LARBI', room: '22', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'ADV STRUCT MECH', prof: 'ASSAS', room: '22', type: 'Cours' },
            { time: '13h00 - 14h30', subject: 'BRIDGE', prof: 'AMIEUR', room: 'Amphi A', type: 'Cours' },
            { time: '14h35 - 16h05', subject: 'ROADS', prof: 'ASSAS', room: 'Amphi A', type: 'Cours' }
          ],
          'Thursday': [
            { time: '08h00 - 09h30', subject: 'RAILWAY', prof: 'GHEFFAR', room: '22', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'PRES CONCR', prof: 'AMIEUR', room: '22', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'ASS-URB', prof: 'RAHMANI', room: 'CLASSROOM 24', type: 'Cours' },
            { time: '13h00 - 16h00', subject: 'IN SITU VISIT', prof: '---', room: 'Mape', type: 'TP' }
          ]
        },
        'g3': {
          'Sunday': [
            { time: '08h00 - 10h00', subject: 'ROAD GEOT', prof: 'DERRICHE', room: '5', type: 'Cours' },
            { time: '10h05 - 12h05', subject: 'RC', prof: 'TAFRAOUT', room: '5', type: 'Cours' }
          ],
          'Monday': [
            { time: '08h00 - 10h00', subject: 'STRUCT DYN', prof: 'LARBI', room: '5', type: 'Cours' },
            { time: '13h00 - 16h05', subject: 'PRACTICAL (RG/SM4/ROADS)', prof: 'MAHIEDDINE / DALI', room: 'LABO', type: 'TP' }
          ],
          'Tuesday': [
            { time: '08h00 - 09h30', subject: 'ROAD SKETCH', prof: 'HATRI-ASSAS', room: '25', type: 'TD' },
            { time: '09h35 - 11h05', subject: 'ROCK MECH', prof: 'BENAMGHAR', room: '5', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'ADV STRUCT MECH', prof: 'ASSAS', room: '5', type: 'Cours' },
            { time: '13h00 - 16h05', subject: 'ROADS', prof: 'ASSAS', room: 'Amphi A', type: 'Cours' }
          ],
          'Thursday': [
            { time: '08h00 - 09h30', subject: 'PRES CONCR', prof: 'AMIEUR', room: '5', type: 'Cours' },
            { time: '13h00 - 16h00', subject: 'IN SITU VISIT', prof: '---', room: 'Mape', type: 'TP' }
          ]
        },
        'g4': {
          'Sunday': [
            { time: '08h00 - 10h00', subject: 'SOIL MECH 4', prof: 'HAMADI', room: '22', type: 'Cours' },
            { time: '10h05 - 12h05', subject: 'FEM', prof: 'MEHIAOUI', room: '22', type: 'Cours' }
          ],
          'Monday': [
            { time: '08h00 - 10h00', subject: 'ROAD GEOT', prof: 'DERRICHE', room: '22', type: 'Cours' },
            { time: '13h00 - 16h05', subject: 'PRACTICAL (RG/SM4/ROADS)', prof: 'MAHIEDDINE / DALI', room: 'LABO', type: 'TP' }
          ],
          'Tuesday': [
            { time: '09h35 - 11h05', subject: 'ROAD SKETCH', prof: 'HATRI-ASSAS', room: '5', type: 'TD' },
            { time: '11h10 - 12h40', subject: 'BIM', prof: 'KERMICHE & TAFRAOUT', room: 'CLASSROOM 25', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'STRUCT DYN', prof: 'LARBI', room: '22', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'ADV STRUCT MECH', prof: 'ASSAS', room: '22', type: 'Cours' }
          ],
          'Thursday': [
            { time: '08h00 - 09h30', subject: 'RAILWAY', prof: 'GHEFFAR', room: '22', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'PRES CONCR', prof: 'AMIEUR', room: '22', type: 'Cours' }
          ]
        }
      },
      'dib_3': {
        'promo': {
          'Saturday': [{ time: '08h00 - 12h40', subject: 'ADDITIONAL TRAINING ON SOFTWARE', prof: 'BOUDJEMA / TOUHAMI / HENNA', room: '20', type: 'TP' }],
          'Sunday': [
            { time: '08h00 - 09h30', subject: 'SOIL DYN', prof: 'MEHIAOUI', room: '20', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'ROAD PATHO', prof: 'BERRICHE', room: '20', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'DTP', prof: 'HAMADI', room: '20', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'CO', prof: 'TAFRAOUT', room: '20', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'MDP', prof: 'CHOHRA', room: '20', type: 'Cours' }
          ],
          'Monday': [
            { time: '08h00 - 09h30', subject: 'SOIL DYN', prof: 'MEHIAOUI', room: '20', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'BP 2', prof: 'AMIEUR', room: '20', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'PATHO.OA', prof: 'FEDGHOUCHE', room: '20', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'OS', prof: 'BENAMGHAR', room: '20', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'OS', prof: 'BENAMGHAR', room: '5', type: 'Cours' }
          ],
          'Tuesday': [
            { time: '08h00 - 09h30', subject: 'ODC/PGC', prof: 'KHOUAS', room: '22', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'CO', prof: 'TAFRAOUT', room: '20', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'EDT', prof: 'CHIALI', room: 'CLASSROOM 20', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'LENSTARTUP', prof: 'MOBARKI', room: '5', type: 'Cours' },
            { time: '15h05 - 16h35', subject: 'AUTOM-C', prof: 'BELHADJ', room: 'CC', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'RHEOL', prof: 'TAKI', room: '20', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'ODC/PGC', prof: 'KHOUAS', room: '25', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'ESQ PR', prof: 'AMIEUR', room: 'CLASSROOM 20', type: 'Cours' },
            { time: '12h00 - 13h30', subject: 'ESQ BA', prof: 'BENBOUZID', room: 'CLASSROOM 25', type: 'Cours' },
            { time: '13h30 - 15h00', subject: 'DDAT', prof: 'CHIALI', room: 'SALLE 20', type: 'Cours' }
          ],
          'Thursday': [
            { time: '08h00 - 09h30', subject: 'ESQ APD', prof: 'BAYASLI', room: '20', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'ESQ VF', prof: 'MORSLI', room: '20', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'LENSTARTUP', prof: 'MOBARKI', room: '20', type: 'Cours' },
            { time: '13h30 - 16h35', subject: 'IN SITU VISITS', prof: '---', room: 'Mape', type: 'TP' }
          ]
        }
      },

      // ==========================================
      // DMS
      // ==========================================
      'dms_1': {
        'sec1': {
          'Sunday': [
            { time: '08h00 - 09h30', subject: 'SM 1', prof: 'Mrs MSILI', room: '16', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'APP GO', prof: 'Mr HEBIB', room: '16', type: 'Cours' },
            { time: '13h00 - 14h30', subject: 'BM', prof: 'Mr GUEHLOUZ', room: '16', type: 'Cours' },
            { time: '14h35 - 16h05', subject: 'AI', prof: 'Mr BAKHOCHE', room: '16', type: 'Cours' }
          ],
          'Monday': [
            { time: '08h00 - 09h30', subject: 'SOM 1', prof: 'Mr GASSIS', room: '24', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'AH', prof: 'Mr LEFKIR', room: '24', type: 'Cours' },
            { time: '13h00 - 16h05', subject: 'TP APP GEO', prof: 'Mr HEBIB', room: 'Labo', type: 'TP' }
          ],
          'Tuesday': [
            { time: '08h00 - 09h30', subject: 'SM 1', prof: 'Mrs MSILI', room: '24', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'T. ENGLISH 1', prof: 'Miss KHALFI', room: '24', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'SOM 1', prof: 'Mr GASSIS', room: '01', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'CM 1', prof: 'Mrs ZAHAFI', room: '16', type: 'Cours' },
            { time: '13h00 - 14h30', subject: 'NPL', prof: 'Mr BAKHTI', room: '18', type: 'Cours' },
            { time: '14h35 - 16h05', subject: 'ENTR', prof: 'Mr ZEMOUR', room: '18', type: 'Cours' }
          ],
          'Thursday': [
            { time: '08h00 - 09h30', subject: 'TPES', prof: 'Mrs SAADI', room: '09', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'TOPO', prof: 'Mr BENOUNAS', room: '16', type: 'Cours' },
            { time: '13h00 - 16h05', subject: 'SPECIALIZED SEMINARS 1', prof: 'Mr GASSIS', room: 'Amphi B', type: 'Cours' }
          ]
        },
        'sec2': {
          'Sunday': [
            { time: '08h00 - 09h30', subject: 'APP GO', prof: 'Mr HEBIB', room: '17', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'SM 1', prof: 'Mrs MSILI', room: '17', type: 'Cours' },
            { time: '13h00 - 14h30', subject: 'AI', prof: 'Mr BAKHOCHE', room: '17', type: 'Cours' },
            { time: '14h35 - 16h05', subject: 'BM', prof: 'Mr GUEHLOUZ', room: '17', type: 'Cours' }
          ],
          'Monday': [
            { time: '08h00 - 09h30', subject: 'AH', prof: 'Mr LEFKIR', room: '16', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'SOM 1', prof: 'Mr BENOUCHFOUN', room: '16', type: 'Cours' }
          ],
          'Tuesday': [
            { time: '08h00 - 09h30', subject: 'T. ENGLISH 1', prof: 'Miss KHALFI', room: '16', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'SM 1', prof: 'Mrs MSILI', room: '16', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'CM 1', prof: 'Mrs ZAHAFI', room: '16', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'SOM 1', prof: 'Mr BENOUCHFOUN', room: '16', type: 'Cours' },
            { time: '13h00 - 14h30', subject: 'ENTR', prof: 'Mr ZEMOUR', room: '14', type: 'Cours' },
            { time: '14h35 - 16h05', subject: 'NPL', prof: 'Mr BAKHTI', room: '14', type: 'Cours' }
          ],
          'Thursday': [
            { time: '08h00 - 09h30', subject: 'TOPO', prof: 'Mr BENOUNAS', room: '16', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'TPES', prof: 'Mrs SAADI', room: '16', type: 'Cours' },
            { time: '13h00 - 16h05', subject: 'SPECIALIZED SEMINARS 1', prof: 'Mr GASSIS', room: 'Amphi B', type: 'Cours' }
          ]
        },
        'sec3': {
          'Sunday': [
            { time: '08h00 - 09h30', subject: 'BM', prof: 'Mr BENOUNAS', room: '08', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'TPES', prof: 'Mrs SAADI', room: '08', type: 'Cours' },
            { time: '13h00 - 14h30', subject: 'SM 1', prof: 'Mr BERRICHE', room: '08', type: 'Cours' },
            { time: '14h35 - 16h05', subject: 'AI', prof: 'Mr DALI', room: '08', type: 'Cours' }
          ],
          'Monday': [
            { time: '08h00 - 09h30', subject: 'SOM 1', prof: 'Mr ANNAD', room: '17', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'CM 1', prof: 'Mr KEHILA', room: '17', type: 'Cours' }
          ],
          'Tuesday': [
            { time: '08h00 - 09h30', subject: 'NPL', prof: 'Mr BAKHTI', room: '17', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'APP GO', prof: 'Mr HEBIB', room: '17', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'SOM 1', prof: 'Mr ANNAD', room: '17', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'AH', prof: 'Mrs CHENITI', room: '17', type: 'Cours' },
            { time: '13h00 - 14h30', subject: 'SM 1', prof: 'Mr BERRICHE', room: '16', type: 'Cours' },
            { time: '14h35 - 16h05', subject: 'ENTR', prof: 'Mr ZEMOUR', room: '16', type: 'Cours' }
          ],
          'Thursday': [
            { time: '08h00 - 09h30', subject: 'T. ENGLISH 1', prof: 'Mr AZZI', room: '17', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'TOPO', prof: 'Mrs OULD RAMOUL', room: '17', type: 'Cours' },
            { time: '13h00 - 16h05', subject: 'SPECIALIZED SEMINARS 1', prof: 'Mr GASSIS', room: 'Amphi B', type: 'Cours' }
          ]
        },
        'sec4': {
          'Sunday': [
            { time: '08h00 - 09h30', subject: 'TPES', prof: 'Mrs SAADI', room: '18', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'BM', prof: 'Mr BENOUNAS', room: '18', type: 'Cours' },
            { time: '13h00 - 14h30', subject: 'AI', prof: 'Mr DALI', room: '18', type: 'Cours' },
            { time: '14h35 - 16h05', subject: 'SM 1', prof: 'Mr BERRICHE', room: '18', type: 'Cours' }
          ],
          'Monday': [
            { time: '08h00 - 09h30', subject: 'CM 1', prof: 'Mr KEHILA', room: '18', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'SOM 1', prof: 'Mr ANNAD', room: '18', type: 'Cours' }
          ],
          'Tuesday': [
            { time: '08h00 - 09h30', subject: 'APP GO', prof: 'Mr HEBIB', room: '18', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'NPL', prof: 'Mr BAKHTI', room: '18', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'AH', prof: 'Mrs CHENITI', room: '18', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'SOM 1', prof: 'Mr ANNAD', room: '18', type: 'Cours' },
            { time: '13h00 - 14h30', subject: 'ENTR', prof: 'Mr ZEMOUR', room: '14', type: 'Cours' },
            { time: '14h35 - 16h05', subject: 'SM 1', prof: 'Mr BERRICHE', room: '14', type: 'Cours' }
          ],
          'Thursday': [
            { time: '08h00 - 09h30', subject: 'TOPO', prof: 'Mrs OULD RAMOUL', room: '18', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'T. ENGLISH 1', prof: 'Mr AZZI', room: '18', type: 'Cours' },
            { time: '13h00 - 16h05', subject: 'SPECIALIZED SEMINARS 1', prof: 'Mr GASSIS', room: 'Amphi B', type: 'Cours' }
          ]
        }
      },
      'dms_2': {
        'sec1': {
          'Sunday': [
            { time: '08h00 - 10h00', subject: 'STRUCTURAL DYNAMICS 1', prof: 'M. HADID', room: '14', type: 'Cours' },
            { time: '10h05 - 12h05', subject: 'REINFORCED CONCRETE 2', prof: 'M. BELAOURA', room: '14', type: 'Cours' },
            { time: '13h00 - 14h30', subject: 'TUNNELS', prof: 'M. HEBIB', room: '14', type: 'Cours' },
            { time: '14h35 - 16h05', subject: 'HYDROLIC STRUCTURES', prof: 'M. LEFKIR', room: '14', type: 'Cours' }
          ],
          'Monday': [
            { time: '08h00 - 10h00', subject: 'STEEL STRUCTURES 1', prof: 'Ms BOUKEZZI', room: '14', type: 'Cours' },
            { time: '10h05 - 12h05', subject: 'STRUCTURAL MECHANICS 1', prof: 'Ms MESSAOUDI', room: '14', type: 'Cours' },
            { time: '13h00 - 16h05', subject: 'SITE VISITS', prof: '---', room: 'Mape', type: 'TP' }
          ],
          'Tuesday': [
            { time: '08h00 - 10h00', subject: 'BRIDGES 1', prof: 'M. ZOURGUI', room: '14', type: 'Cours' },
            { time: '10h05 - 12h05', subject: 'FINITE ELEMENTS METHOD 1', prof: 'M. CHIKH', room: '14', type: 'Cours' },
            { time: '13h00 - 16h05', subject: 'INTRODUCTION TO BIM', prof: 'Mr TAFRAOUT', room: 'Salle 25', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'ROADS 2', prof: 'M. BAKHTI', room: '14', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'PRESTRESSED CONCRETE 1', prof: 'M. BELAOURA', room: '14', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'TP ROADS', prof: 'Ms M\'SILI', room: '14', type: 'TP' },
            { time: '13h00 - 16h05', subject: 'ROADS SKETCH', prof: 'M. GUENAIZI', room: '24', type: 'TD' }
          ],
          'Thursday': [
            { time: '08h00 - 10h00', subject: 'BUILDINGS 1', prof: 'M. LADJEL', room: '14', type: 'Cours' },
            { time: '10h05 - 12h05', subject: 'SOIL MECHANICS 4', prof: 'M. GUEHLOUZ', room: '14', type: 'Cours' }
          ]
        },
        'sec2': {
          'Sunday': [
            { time: '08h00 - 10h00', subject: 'REINFORCED CONCRETE 2', prof: 'M. BELAOURA', room: '15', type: 'Cours' },
            { time: '10h05 - 12h05', subject: 'STRUCTURAL DYNAMICS 1', prof: 'M. HADID', room: '15', type: 'Cours' },
            { time: '13h00 - 14h30', subject: 'HYDROLIC STRUCTURES', prof: 'M. LEFKIR', room: '15', type: 'Cours' },
            { time: '14h35 - 16h05', subject: 'TUNNELS', prof: 'M. HEBIB', room: '15', type: 'Cours' }
          ],
          'Monday': [
            { time: '08h00 - 10h00', subject: 'STRUCTURAL MECHANICS 1', prof: 'Ms MESSAOUDI', room: '15', type: 'Cours' },
            { time: '10h05 - 12h05', subject: 'FINITE ELEMENTS METHOD 1', prof: 'M. CHIKH', room: '15', type: 'Cours' },
            { time: '13h00 - 16h05', subject: 'SITE VISITS', prof: '---', room: 'Mape', type: 'TP' }
          ],
          'Tuesday': [
            { time: '08h00 - 10h00', subject: 'STEEL STRUCTURES 1', prof: 'Ms BOUKEZZI', room: '15', type: 'Cours' },
            { time: '10h05 - 12h05', subject: 'BRIDGES 1', prof: 'M. ZOURGUI', room: '15', type: 'Cours' },
            { time: '13h00 - 16h05', subject: 'INTRODUCTION TO BIM', prof: 'Mr TAFRAOUT', room: 'Salle 25', type: 'Cours' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'PRESTRESSED CONCRETE 1', prof: 'M. BELAOURA', room: '15', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'ROADS 2', prof: 'M. BAKHTI', room: '15', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'TP SOIL MECH.', prof: 'Ms MEBAREK', room: '15', type: 'TP' },
            { time: '13h00 - 16h05', subject: 'ROADS SKETCH', prof: 'M. BENBOUZID', room: '25', type: 'TD' }
          ],
          'Thursday': [
            { time: '08h30 - 10h00', subject: 'SOIL MECHANICS 4', prof: 'M. GUEHLOUZ', room: '15', type: 'Cours' },
            { time: '10h05 - 12h05', subject: 'BUILDINGS 1', prof: 'M. LADJEL', room: '15', type: 'Cours' }
          ]
        }
      },
      'dms_3': {
        'promo': {
          'Saturday': [
            { time: '08h00 - 11h05', subject: 'MIDAS', prof: 'Mr. GUERFI', room: '19', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'GROUPE TUN', prof: '---', room: '19', type: 'TD' },
            { time: '11h30 - 14h30', subject: 'Méthodes de Réalisation des OS', prof: 'Mr HEBIB', room: '19', type: 'Cours' }
          ],
          'Sunday': [
            { time: '08h00 - 09h30', subject: 'Calcul Automatique des Structures', prof: 'Mr BENOUCHFOUN', room: '19', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'MANAG de Projets', prof: 'Mme CHIALI', room: '19', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Calcul Economique des Projets', prof: 'Mme CHIALI', room: '19', type: 'Cours' },
            { time: '13h30 - 15h00', subject: "Calcul d'Ouvrages", prof: 'Mr. LADJEL', room: '19', type: 'Cours' },
            { time: '15h05 - 16h40', subject: 'Dév. Dur. Amen. Territ.', prof: 'Mme SAADI', room: '24', type: 'Cours' }
          ],
          'Monday': [
            { time: '08h00 - 09h30', subject: "Pathologie et Réhabilitation des Ouvrages d'Art", prof: 'Mr. FEDGHOUCHE', room: '19', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Optimisation dans le Génie Civil', prof: 'Mr FEDGHOUCHE', room: '19', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Organisation de chantier', prof: 'Mr MOKHTAR', room: '19', type: 'Cours' },
            { time: '13h30 - 16h40', subject: 'Thermique Bâtiment (GROUPE BAT)', prof: 'M. ANNAD', room: '19', type: 'TD' }
          ],
          'Tuesday': [
            { time: '08h00 - 09h30', subject: 'MMC Approfondie', prof: 'Mme ZAHAFI', room: '19', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Dynamique des Sols 2', prof: 'Mr HADID', room: '19', type: 'Cours' },
            { time: '09h35 - 12h40', subject: 'TD DOSOLS', prof: 'Mr. TOUNSI / Mme ZAHAFI', room: '10 / 11', type: 'TD' },
            { time: '13h30 - 16h40', subject: 'Visites de Chantiers', prof: '---', room: 'Mape', type: 'TP' }
          ],
          'Wednesday': [
            { time: '08h00 - 09h30', subject: 'Droit des TP', prof: 'Mr HAMADI', room: '19', type: 'Cours' },
            { time: '09h35 - 11h05', subject: 'Matériaux Innovants', prof: 'Mme MSILI', room: '19', type: 'Cours' },
            { time: '11h10 - 12h40', subject: 'Analyse Expérimentale', prof: 'Mr MAHREZ', room: '19', type: 'Cours' },
            { time: '13h30 - 16h40', subject: 'Esquisse Bâtiments / Tunnels', prof: 'Mr AKNOUCHE / Mr CHERCHALI', room: '19 / 17', type: 'TD' }
          ],
          'Thursday': [
            { time: '08h00 - 09h30', subject: 'Lean Entreprenariat', prof: '---', room: '19', type: 'Cours' },
            { time: '09h35 - 12h40', subject: 'Esquisse Ponts', prof: 'Mr ZOURGUI / Mr KHELFI', room: '19 / 10', type: 'TD' }
          ]
        }
      }
    };
