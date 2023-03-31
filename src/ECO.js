function ECOjs(chess = new Chess()){
    var ECOs = [
        {name: "C44 Scotch, Relfsson gambit ('MacLopez')", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bb5"},
        {name: "C44 Scotch, Goering gambit", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. c3"},
        {name: "C44 Scotch, Sea-cadet mate", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. c3 dxc3 5. Nxc3 d6 6. Bc4 Bg4 7. O-O Ne5 8. Nxe5 Bxd1 9. Bxf7+ Ke7 10. Nd5+"},
        {name: "C44 Scotch, Goering gambit", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. c3 dxc3 5. Nxc3 Bb4"},
        {name: "C44 Scotch, Goering gambit, Bardeleben variation", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. c3 dxc3 5. Nxc3 Bb4 6. Bc4 Nf6"},
        {name: "C44 Scotch gambit", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4"},
        {name: "C44 Scotch gambit, Anderssen (Paulsen, Suhle) counter-attack", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bc5 5. O-O d6 6. c3 Bg4"},
        {name: "C44 Scotch gambit", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bc5 5. Ng5"},
        {name: "C44 Scotch gambit, Cochrane-Shumov defence", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bc5 5. Ng5 Nh6 6. Nxf7 Nxf7 7. Bxf7+ Kxf7 8. Qh5+ g6 9. Qxc5 d5"},
        {name: "C44 Scotch gambit, Vitzhum attack", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bc5 5. Ng5 Nh6 6. Qh5"},
        {name: "C44 Scotch gambit", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bb4+"},
        {name: "C44 Scotch gambit, Hanneken variation", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bb4+ 5. c3 dxc3 6. O-O cxb2 7. Bxb2 Nf6 8. Ng5 O-O 9. e5 Nxe5"},
        {name: "C44 Scotch gambit", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bb4+ 5. c3 dxc3 6. bxc3"},
        {name: "C44 Scotch gambit, Cochrane variation", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bb4+ 5. c3 dxc3 6. bxc3 Ba5 7. e5"},
        {name: "C44 Scotch gambit, Benima defence", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Be7"},
        {name: "C44 Scotch gambit, Dubois-Reti defence", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Nf6"},
        {name: "C45 Scotch game", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4"},
        {name: "C45 Scotch, Ghulam Kassim variation", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Nxd4 5. Qxd4 d6 6. Bd3"},
        {name: "C45 Scotch, Pulling counter-attack", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4"},
        {name: "C45 Scotch, Horwitz attack", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nb5"},
        {name: "C45 Scotch, Berger variation", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nb5 Bb4+ 6. Nd2 Qxe4+ 7. Be2 Qxg2 8. Bf3 Qh3 9. Nxc7+ Kd8 10. Nxa8 Nf6 11. a3"},
        {name: "C45 Scotch game", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nb5 Bb4+ 6. Bd2"},
        {name: "C45 Scotch, Rosenthal variation", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nb5 Bb4+ 6. Bd2 Qxe4+ 7. Be2 Kd8 8. O-O Bxd2 9. Nxd2 Qg6"},
        {name: "C45 Scotch, Fraser attack", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nf3"},
        {name: "C45 Scotch, Steinitz variation", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nc3"},
        {name: "C45 Scotch, Schmidt variation", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Nf6"},
        {name: "C45 Scotch, Mieses variation", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Nf6 5. Nxc6 bxc6 6. e5"},
        {name: "C45 Scotch, Tartakower variation", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Nf6 5. Nxc6 bxc6 6. Nd2"},
        {name: "C45 Scotch game", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5"},
        {name: "C45 Scotch, Blackburne attack", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Be3 Qf6 6. c3 Nge7 7. Qd2"},
        {name: "C45 Scotch, Gottschall variation", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Be3 Qf6 6. c3 Nge7 7. Qd2 d5 8. Nb5 Bxe3 9. Qxe3 O-O 10. Nxc7 Rb8 11. Nxd5 Nxd5 12. exd5 Nb4"},
        {name: "C45 Scotch, Paulsen attack", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Be3 Qf6 6. c3 Nge7 7. Bb5"},
        {name: "C45 Scotch, Paulsen, Gunsberg defence", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Be3 Qf6 6. c3 Nge7 7. Bb5 Nd8"},
        {name: "C45 Scotch, Meitner variation", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Be3 Qf6 6. c3 Nge7 7. Nc2"},
        {name: "C45 Scotch, Blumenfeld attack", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Be3 Qf6 6. Nb5"},
        {name: "C45 Scotch, Potter variation", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Nb3"},
        {name: "C45 Scotch, Romanishin variation", pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Nb3 Bb4+"},
        {name: "C46 Three knights game", pgn: "1. e4 e5 2. Nf3 Nc6 3. Nc3"},
        {name: "C46 Three knights, Schlechter variation", pgn: "1. e4 e5 2. Nf3 Nc6 3. Nc3 Bb4 4. Nd5 Nf6"},
        {name: "C46 Three knights, Winawer defence (Gothic defence)", pgn: "1. e4 e5 2. Nf3 Nc6 3. Nc3 f5"},
        {name: "C46 Three knights, Steinitz variation", pgn: "1. e4 e5 2. Nf3 Nc6 3. Nc3 g6"},
        {name: "C46 Three knights, Steinitz, Rosenthal variation", pgn: "1. e4 e5 2. Nf3 Nc6 3. Nc3 g6 4. d4 exd4 5. Nd5"},
        {name: "C46 Four knights game", pgn: "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6"},
        {name: "C46 Four knights, Schultze-Mueller gambit", pgn: "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Nxe5"},
        {name: "C46 Four knights, Italian variation", pgn: "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bc4"},
        {name: "C46 Four knights, Gunsberg variation", pgn: "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. a3"},
        {name: "C47-C49 Four knights, Scotch variation", pgn: "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. d4"},
        {name: "C50 King's pawn game", pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4"},
        {name: "C50 Blackburne shilling gambit", pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nd4 4. Nxe5 Qg5 5. Nxf7 Qxg2 6. Rf1 Qxe4+ 7. Be2 Nf3+"},
        {name: "C50 Rousseau gambit", pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 f5"},
        {name: "C50 Hungarian defence", pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7"},
        {name: "C50 Hungarian defence, Tartakower variation", pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7 4. d4 exd4 5. c3 Nf6 6. e5 Ne4"},
        {name: "C50 Giuoco Piano", pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5"},
        {name: "C50 Giuoco Piano, four knights variation", pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. Nc3 Nf6"},
        {name: "C50 Giuoco Piano, Jerome gambit", pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. Bxf7+"},
        {name: "C50 Giuoco Pianissimo", pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3"},
        {name: "C50 Giuoco Pianissimo, Dubois variation", pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 f5 5. Ng5 f4"},
        {name: "C50 Giuoco Pianissimo", pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6"},
        {name: "C50 Giuoco Pianissimo, Italian four knights variation", pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. Nc3"},
        {name: "C50 Giuoco Pianissimo, Canal variation", pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. Nc3 d6 6. Bg5"},
        {name: "C51-C52 Evans gambit", pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4"},
        {name: "C53-C54 Giuoco Piano", pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3"},
        {name: "C55-C59 Two knights defence", pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6"},
        {name: "C60-C99 Ruy Lopez (Spanish opening)", pgn: "1. e4 e5 2. Nf3 Nc6 3. Bb5"},
        {name: "D00 Queen's pawn game", pgn: "1. d4 d5"},
        {name: "D00 Queen's pawn, Mason variation", pgn: "1. d4 d5 2. Bf4"},
        {name: "D00 Queen's pawn, Mason variation, Steinitz counter-gambit", pgn: "1. d4 d5 2. Bf4 c5"},
        {name: "D00 Levitsky attack (Queen's bishop attack)", pgn: "1. d4 d5 2. Bg5"},
        {name: "D00 Blackmar gambit", pgn: "1. d4 d5 2. e4"},
        {name: "D00 Queen's pawn, stonewall attack", pgn: "1. d4 d5 2. e3 Nf6 3. Bd3"},
        {name: "D00 Queen's pawn, Chigorin variation", pgn: "1. d4 d5 2. Nc3"},
        {name: "D00 Queen's pawn, Anti-Veresov", pgn: "1. d4 d5 2. Nc3 Bg4"},
        {name: "D00 Blackmar-Diemer gambit", pgn: "1. d4 d5 2. Nc3 Nf6 3. e4"},
        {name: "D00 Blackmar-Diemer, Euwe defence", pgn: "1. d4 d5 2. Nc3 Nf6 3. e4 dxe4 4. f3 exf3 5. Nxf3 e6"},
        {name: "D00 Blackmar-Diemer, Lemberg counter-gambit", pgn: "1. d4 d5 2. Nc3 Nf6 3. e4 e5"},
        {name: "D01 Richter-Veresov attack", pgn: "1. d4 d5 2. Nc3 Nf6 3. Bg5"},
        {name: "D01 Richter-Veresov attack, Veresov variation", pgn: "1. d4 d5 2. Nc3 Nf6 3. Bg5 Bf5 4. Bxf6"},
        {name: "D01 Richter-Veresov attack, Richter variation", pgn: "1. d4 d5 2. Nc3 Nf6 3. Bg5 Bf5 4. f3"},
        {name: "D02 Queen's pawn game", pgn: "1. d4 d5 2. Nf3"},
        {name: "D02 Queen's pawn game, Chigorin variation", pgn: "1. d4 d5 2. Nf3 Nc6"},
        {name: "D02 Queen's pawn game, Krause variation", pgn: "1. d4 d5 2. Nf3 c5"},
        {name: "D02 Queen's pawn game", pgn: "1. d4 d5 2. Nf3 Nf6"},
        {name: "D02 London System", pgn: "1. d4 d5 2. Nf3 Nf6 3. Bf4"},
        {name: "D03 Torre attack (Tartakower variation)", pgn: "1. d4 d5 2. Nf3 Nf6 3. Bg5"},
        {name: "D04-D05 Queen's pawn game", pgn: "1. d4 d5 2. Nf3 Nf6 3. e3"},
        {name: "D06 Queen's Gambit", pgn: "1. d4 d5 2. c4"},
        {name: "D06 Queen's Gambit Declined, Grau (Sahovic) defence", pgn: "1. d4 d5 2. c4 Bf5"},
        {name: "D06 Queen's Gambit Declined, Marshall defence", pgn: "1. d4 d5 2. c4 Nf6"},
        {name: "D06 Queen's Gambit Declined, symmetrical (Austrian) defence", pgn: "1. d4 d5 2. c4 c5"},
        {name: "D07-D09 Queen's Gambit Declined, Chigorin defence", pgn: "1. d4 d5 2. c4 Nc6"},
        {name: "D10-D15 Queen's Gambit Declined Slav defence", pgn: "1. d4 d5 2. c4 c6"},
        {name: "D16 Queen's Gambit Declined Slav accepted, Alapin variation", pgn: "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4"},
        {name: "D16 Queen's Gambit Declined Slav, Smyslov variation", pgn: "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Na6 6. e4 Bg4"},
        {name: "D16 Queen's Gambit Declined Slav, Soultanbeieff variation", pgn: "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 e6"},
        {name: "D16 Queen's Gambit Declined Slav, Steiner variation", pgn: "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bg4"},
        {name: "D17-D19 Queen's Gambit Declined Slav, Czech defence", pgn: "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5"},
        {name: "D20-D29 Queen's gambit accepted", pgn: "1. d4 d5 2. c4 dxc4"},
        {name: "D30-D42 Queen's gambit declined", pgn: "1. d4 d5 2. c4 e6"},
        {name: "D43-D49 Queen's Gambit Declined semi-Slav", pgn: "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Nf3 c6"},
        {name: "D50-D69 Queen's Gambit Declined, 4.Bg5", pgn: "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5"},
        {name: "D70-D79 Neo-Gruenfeld defence", pgn: "1. d4 Nf6 2. c4 g6 3. f3 d5"},
        {name: "D80-D99 Gruenfeld defence", pgn: "1. d4 Nf6 2. c4 g6 3. Nc3 d5"},
        {name: "E00 Queen's pawn game", pgn: "1. d4 Nf6 2. c4 e6"},
        {name: "E00 Neo-Indian (Seirawan) attack", pgn: "1. d4 Nf6 2. c4 e6 3. Bg5"},
        {name: "E00 Catalan opening", pgn: "1. d4 Nf6 2. c4 e6 3. g3"},
        {name: "E01-E09 Catalan, closed", pgn: "1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2"},
        {name: "E10 Queen's pawn game", pgn: "1. d4 Nf6 2. c4 e6 3. Nf3"},
        {name: "E10 Blumenfeld counter-gambit", pgn: "1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 b5"},
        {name: "E10 Blumenfeld counter-gambit accepted", pgn: "1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 b5 5. dxe6 fxe6 6. cxb5 d5"},
        {name: "E10 Blumenfeld counter-gambit, Dus-Chotimursky variation", pgn: "1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 b5 5. Bg5"},
        {name: "E10 Blumenfeld counter-gambit, Spielmann variation", pgn: "1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 b5 5. Bg5 exd5 6. cxd5 h6"},
        {name: "E10 Dzindzikhashvili defence", pgn: "1. d4 Nf6 2. c4 e6 3. Nf3 a6"},
        {name: "E10 Doery defence", pgn: "1. d4 Nf6 2. c4 e6 3. Nf3 Ne4"},
        {name: "E11 Bogo-Indian defence", pgn: "1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+"},
        {name: "E11 Bogo-Indian defence, Gruenfeld variation", pgn: "1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+ 4. Nbd2"},
        {name: "E11 Bogo-Indian defence, Nimzovich variation", pgn: "1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+ 4. Bd2 Qe7"},
        {name: "E11 Bogo-Indian defence, Monticelli trap", pgn: "1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+ 4. Bd2 Bxd2+ 5. Qxd2 b6 6. g3 Bb7 7. Bg2 O-O 8. Nc3 Ne4 9. Qc2 Nxc3 10. Ng5"},
        {name: "E12-E19 Queen's Indian defence", pgn: "1. d4 Nf6 2. c4 e6 3. Nf3 b6"},
        {name: "E20-E59 Nimzo-Indian defence", pgn: "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4"},
        {name: "E60-E99 King's Indian defence", pgn: "1. d4 Nf6 2. c4 g6"}
    ];
    var ECO = {
        ECOs: ECOs,
        chess: chess,
        add: function(obj){
            ECO.ECOs.push(obj);
        },
        adds: function(obj){
            ECO.ECOs.push(...obj);
        },
        pgns: function(moveNumber = 'all'){
            if(moveNumber == 'all') return ECO.ECOs;
            var pgns = [];
            for(var pgn of ECO.ECOs){
                for(let i = 0; i < ECO.chess.history().length - moveNumber; i++){
                    ECO.chess.undo();
                }
                pgns.push({name: pgn.name, pgn: ECO.chess.pgn()});
            }
            return pgns;
        },
        pgnMoves: function(moveNumber = 'all'){
            if(moveNumber == 'all') return ECO.ECOs;
            var pgns = [];
            for(var pgn of ECO.ECOs){
                for(let i = 0; i < ECO.chess.history().length - moveNumber; i++){
                    ECO.chess.undo();
                }
                pgns.push({name: pgn.name, pgn: ECO.chess.pgn(), history: ECO.chess.history()});
            }
            return pgns;
        },
        fens: function(moveNumber = 'last'){
            var fens = [];
            for(var pgn of ECO.ECOs){
                ECO.chess.load_pgn(pgn.pgn);
                if(moveNumber == 'last') {
                    fens.push({name: pgn.name, fen: ECO.chess.fen(), pgn: pgn.pgn});
                } else if(moveNumber == 'first'){
                    fens.push({name: pgn.name, fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', pgn: pgn.pgn});
                } else {
                    var len = ECO.chess.history().length - moveNumber;
                    for(let i = 0; i < len; i++){
                        ECO.chess.undo();
                    }
                    fens.push({name: pgn.name, fen: ECO.chess.fen(), pgn: pgn.pgn});
                }
            }
            return fens;
        },
        positionToECO: function(fen){
            var ECOs = [];
            for(var ECOfen of ECO.fens()){
                if(ECOfen.fen == fen){
                    ECOs.push(ECOfen);
                }
            }
            return ECOs;
        },
        engineOnly: {
            currentlyAvailableOpening: function(game){
                var ECOs = [];
                var fens = ECO.fens(game.history().length == 0 ? 'first' : game.history().length);
                fens.forEach(element => {
                    if(element.fen == game.fen()){
                        ECO.chess.load_pgn(element.pgn);
                        ECOs.push({name: element.name, fen: element.fen, pgn: element.pgn, move: ECO.chess.history()[game.history().length]})
                    }
                });
                return ECOs;
            }
        }
    };
    return ECO;
};
