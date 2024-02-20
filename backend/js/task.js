/**
 * Task 1
 */
function leafFiles(files) {
  let parentIds = new Set();
  let leafFiles = [];

  files.forEach((file) => {
    parentIds.add(file.parent);
  });

  files.forEach((file) => {
    if (!parentIds.has(file.id)) {
      leafFiles.push(file.name);
    }
  });

  return leafFiles;
}

/**
 * Task 1
 */
function kLargestCategories(files, k) {
  let categories = new Map();
  let largestCategories = [];

  files.forEach((file) => {
    file.categories.forEach((category) => {
      if (categories.has(category)) {
        categories.set(category, categories.get(category) + 1);
      } else {
        categories.set(category, 1);
      }
    });
  });

  categories = new Map(
    [...categories.entries()].sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0].localeCompare(b[0]);
      }
      return b[1] - a[1];
    })
  );

  categories.forEach((value, key) => {
    if (value >= k) {
      largestCategories.push(key);
    }
  });

  return largestCategories;
}

/**
 * Task 1
 */
function largestFileSize(files) {
  const fileMap = new Map();
  files.forEach((file) => {
    file.children = [];
    fileMap.set(file.id, file);
  });

  files.forEach((file) => {
    if (file.parent !== -1) {
      fileMap.get(file.parent).children.push(file);
    }
  });

  // Recursion to calculate the total size of a file and its children
  function calculateTotalSize(file) {
    let totalSize = file.size;
    if (file.children) {
      file.children.forEach((child) => {
        totalSize += calculateTotalSize(child);
      });
    }
    return totalSize;
  }

  let maxSize = 0;
  files.forEach((file) => {
    const totalSize = calculateTotalSize(file);
    if (totalSize > maxSize) {
      maxSize = totalSize;
    }
  });

  return maxSize;
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

const testFiles = [
  {
    id: 1,
    name: 'Document.txt',
    categories: ['Documents'],
    parent: 3,
    size: 1024,
  },
  {
    id: 2,
    name: 'Image.jpg',
    categories: ['Media', 'Photos'],
    parent: 34,
    size: 2048,
  },
  { id: 3, name: 'Folder', categories: ['Folder'], parent: -1, size: 0 },
  {
    id: 5,
    name: 'Spreadsheet.xlsx',
    categories: ['Documents', 'Excel'],
    parent: 3,
    size: 4096,
  },
  {
    id: 8,
    name: 'Backup.zip',
    categories: ['Backup'],
    parent: 233,
    size: 8192,
  },
  {
    id: 13,
    name: 'Presentation.pptx',
    categories: ['Documents', 'Presentation'],
    parent: 3,
    size: 3072,
  },
  {
    id: 21,
    name: 'Video.mp4',
    categories: ['Media', 'Videos'],
    parent: 34,
    size: 6144,
  },
  { id: 34, name: 'Folder2', categories: ['Folder'], parent: 3, size: 0 },
  {
    id: 55,
    name: 'Code.py',
    categories: ['Programming'],
    parent: -1,
    size: 1536,
  },
  {
    id: 89,
    name: 'Audio.mp3',
    categories: ['Media', 'Audio'],
    parent: 34,
    size: 2560,
  },
  {
    id: 144,
    name: 'Spreadsheet2.xlsx',
    categories: ['Documents', 'Excel'],
    parent: 3,
    size: 2048,
  },
  { id: 233, name: 'Folder3', categories: ['Folder'], parent: -1, size: 4096 },
];

console.assert(
  arraysEqual(
    leafFiles(testFiles).sort((a, b) => a.localeCompare(b)),
    [
      'Audio.mp3',
      'Backup.zip',
      'Code.py',
      'Document.txt',
      'Image.jpg',
      'Presentation.pptx',
      'Spreadsheet.xlsx',
      'Spreadsheet2.xlsx',
      'Video.mp4',
    ]
  )
);

console.assert(
  arraysEqual(kLargestCategories(testFiles, 3), [
    'Documents',
    'Folder',
    'Media',
  ])
);

console.assert(largestFileSize(testFiles) == 20992);
