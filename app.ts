
//  const book: ({ title: string; chapters: { title: string; }[]; } | { title: string; chapters: { title: string; chapters: { title: string; }[]; }[]; })[] = [
 const book: Chapter[] = [
      {
        title: "Chapter 1: Sorting Spells",
        chapters: [
          {
            title: "1.1 Bubble Sort",
          },
          {
            title: "1.2 Insertion Sort",
          },
          {
            title: "1.3 Merge Sort",
          },
          {
            title: "1.4 Quick Sort",
          },
        ],
      },
      {
        title: "Chapter 2: Graphical Charms",
        chapters: [
          {
            title: "2.1 Graph Traversal",
            chapters: [
              {
                title: "2.1.1 Breadth-First Search",
              },
              {
                title: "2.1.2 Depth-First Search",
              },
            ],
          },
          {
            title: "2.2 Shortest Path",
            chapters: [
              {
                title: "2.2.1 Dijkstra's Algorithm",
              },
              {
                title: "2.2.2 Bellman-Ford Algorithm",
              },
            ],
          },
        ],
      },
      {
        title: "Chapter 3: Enchanting Trees",
        chapters: [
          {
            title: "3.1 Binary Trees",
            chapters: [
              {
                title: "3.1.1 Preorder Traversal",
              },
              {
                title: "3.1.2 Inorder Traversal",
              },
              {
                title: "3.1.3 Postorder Traversal",
              },
            ],
          },
          {
            title: "3.2 Balanced Trees",
            chapters: [
              {
                title: "3.2.1 AVL Trees",
              },
              {
                title: "3.2.2 Red-Black Trees",
              },
            ],
          },
        ],
      },
      {
        title: "Chapter 4: Hexadecimal Hexes",
        chapters: [
          {
            title: "4.1 Hash Tables",
            chapters: [
              {
                title: "4.1.1 Linear Probing",
              },
              {
                title: "4.1.2 Quadratic Probing",
              },
            ],
          },
          {
            title: "4.2 Bloom Filters",
            chapters: [
              {
                title: "4.2.1 False Positive Probability",
              },
              {
                title: "4.2.2 Optimal Parameters",
              },
              {
                title: "4.2.3 Deletion Operations",
              },
            ],
          },
        ],
      },
    ];
    
    interface Chapter {
      title: string;
      chapters?: Chapter[];
    }

    let resultString = '';
    function setListChapters(book: Chapter[], depth: number = 0): string {

      const prefix = '*'.repeat(depth);
      
      book.forEach((chapter) => {
        resultString += (prefix ? prefix +  ' ' : '') + chapter.title + '\n';
        if (chapter.chapters) {
          setListChapters(chapter.chapters, depth + 1)
        }
      })

      return resultString;
    }

    const list = setListChapters(book);
    console.log(list);